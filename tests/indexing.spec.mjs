import { readFile } from 'node:fs/promises'
import { expect, test } from '@playwright/test'

const dist = new URL('../dist/', import.meta.url)

test('sitemap pages publish matching canonical and language URLs', async () => {
  const sitemap = await readFile(new URL('sitemap.xml', dist), 'utf8')
  const pages = [...sitemap.matchAll(/<url>(.*?)<\/url>/gs)].map(([, entry]) => {
    const url = entry.match(/<loc>(.*?)<\/loc>/)[1]
    const alternates = [...entry.matchAll(/hreflang="([^"]+)" href="([^"]+)"/g)]
      .map(([, lang, href]) => [lang, href])
    return { url, alternates }
  })
  expect(pages.length).toBeGreaterThan(0)
  const published = new Set(pages.map(({ url }) => url))

  for (const { url, alternates } of pages) {
    const { pathname, origin } = new URL(url)
    const pageFile = pathname.slice(1) + (pathname.endsWith('/') ? 'index.html' : '.html')
    const html = await readFile(new URL(pageFile, dist), 'utf8')
    const canonical = [...html.matchAll(/<link rel="canonical" href="([^"]+)"/g)].map(([, href]) => href)
    expect(canonical, url).toEqual([url])

    const htmlAlternates = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)]
      .map(([, lang, href]) => [lang, href])
    const english = alternates.find(([lang]) => lang === 'en')
    const expectedAlternates = english ? [...alternates, ['x-default', english[1]]] : alternates
    expect(htmlAlternates.sort(), url).toEqual(expectedAlternates.sort())
    expect(alternates.every(([, href]) => published.has(href)), url).toBe(true)

    const menuLinks = [...html.matchAll(/<a href="([^"]+)" lang="([^"]+)" hreflang="[^"]+"/g)]
      .map(([, href, lang]) => [lang, new URL(href, origin).href])
    expect(menuLinks.sort(), url).toEqual(alternates.filter(([, href]) => href !== url).sort())
  }
})

test.describe('language navigation', () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await page.route((url) => url.origin !== baseURL, (route) => route.abort())
  })

  test('desktop menu uses the translations of the current page', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 800 })
    await page.goto('/docs/sqlkit/connect-to-database')
    await page.getByRole('button', { name: 'Change language' }).hover()
    const links = page.getByRole('navigation', { name: 'Change language' }).getByRole('link')
    await expect(links).toHaveCount(1)
    await expect(links.first()).toHaveAttribute('href', '/zh/docs/sqlkit/connect-to-database')
    await links.first().click()
    await expect(page).toHaveURL('/zh/docs/sqlkit/connect-to-database')
  })

  test('mobile menu can switch a translated download page', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/download#developer-tools')
    await page.getByRole('button', { name: 'mobile navigation' }).click()
    const menu = page.getByRole('navigation', { name: 'Change language' })
    await expect(menu.getByRole('link')).toHaveCount(5)
    await menu.getByRole('link', { name: 'Español' }).click()
    await expect(page).toHaveURL('/es/download#developer-tools')
    await expect(page.locator('html')).toHaveAttribute('lang', 'es')
    await expect(page.locator('.VPNavBarTitle a')).toHaveAttribute('href', '/es/products/dockit/')
  })

  test('tablet keeps the language menu and navigation inside the viewport', async ({ page }) => {
    await page.setViewportSize({ width: 960, height: 800 })
    await page.goto('/docs/sqlkit/connect-to-database')
    await expect(page.locator('.VPNavBar')).toBeInViewport()
    await page.getByRole('button', { name: 'mobile navigation' }).click()
    await expect(page.getByRole('navigation', { name: 'Change language' }).getByRole('link')).toBeInViewport()
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(960)
  })

  test.describe('with a Chinese browser locale', () => {
    test.use({ locale: 'zh-TW' })

    test('serves requested languages and English-only pages', async ({ page }) => {
      await page.goto('/es/download#developer-tools')
      await expect(page).toHaveURL('/es/download#developer-tools')
      await expect(page.locator('html')).toHaveAttribute('lang', 'es')
      await page.goto('/blog/introducing-sqlkit')
      await expect(page).toHaveURL('/blog/introducing-sqlkit')
      await expect(page.getByRole('button', { name: 'Change language' })).toHaveCount(0)
    })

    test('an explicit English selection survives reload', async ({ page }) => {
      await page.goto('/zh/download')
      await page.getByRole('button', { name: '切换语言' }).hover()
      await page.getByRole('link', { name: 'English', exact: true }).click()
      await expect(page).toHaveURL('/download')
      await page.reload()
      await expect(page.locator('html')).toHaveAttribute('lang', 'en')
      await expect(page).toHaveURL('/download')
    })
  })
})
