import { expect, test } from '@playwright/test'
import { DOCKIT_VERSION, SQLKIT_VERSION } from '../docs/.vitepress/theme/version.ts'

test.beforeEach(async ({ page, baseURL }) => {
  await page.route((url) => url.origin !== baseURL, (route) => route.abort())
})

for (const prefix of ['', '/zh', '/es', '/ja', '/ko', '/pt-BR']) {
  test(`shareable download tabs on ${prefix || '/'}`, async ({ page }) => {
    const path = `${prefix}/download`
    await page.goto(`${path}#serverless-tools`)
    await expect(page.getByRole('tabpanel')).toHaveAttribute('id', 'serverless-tools')
    await expect(page.locator('#serverless-tools-tab')).toHaveAttribute('aria-selected', 'true')

    await page.locator('#serverless-tools-tab').press('ArrowRight')
    await expect(page.locator('#developer-tools-tab')).toBeFocused()
    await expect(page.getByRole('tabpanel')).toHaveAttribute('id', 'developer-tools')
    await expect(page).toHaveURL(`${path}#developer-tools`)

    await page.reload()
    await expect(page.getByRole('tabpanel')).toHaveAttribute('id', 'developer-tools')
    await page.locator('#database-clients-tab').click()
    await expect(page.getByRole('tabpanel')).toHaveAttribute('id', 'database-clients')
    await expect(page).toHaveURL(`${path}#database-clients`)
  })
}

test('a saved language preference leaves the requested download URL intact', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('gf-lang', 'zh'))
  await page.goto('/download?source=docs#developer-tools')
  await expect(page.getByRole('tabpanel')).toHaveAttribute('id', 'developer-tools')
  await expect(page).toHaveURL('/download?source=docs#developer-tools')
  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
})

test('product download links reach the right card on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  for (const { prefix, app } of [{ prefix: '', app: 'sqlkit' }, { prefix: '/zh', app: 'dockit' }]) {
    const href = `${prefix}/download#${app}`
    await page.goto(`${prefix}/products/${app}/`)
    await page.locator(`main a[href="${href}"]`).first().click()
    await expect(page).toHaveURL(href)
    await expect(page.getByRole('tabpanel')).toHaveAttribute('id', 'database-clients')
    const heading = page.locator(`#${app}`).getByRole('heading')
    await expect(heading).toBeInViewport()
  }
})

test('every installer matches a published release asset', async ({ page, request }) => {
  const headers = { Accept: 'application/vnd.github+json' }
  if (process.env.GH_TOKEN) headers.Authorization = `Bearer ${process.env.GH_TOKEN}`

  await page.goto('/download')
  for (const [app, version] of [['dockit', DOCKIT_VERSION], ['sqlkit', SQLKIT_VERSION]]) {
    const url = `https://api.github.com/repos/geek-fun/${app}/releases/tags/v${version}`
    const response = await request.get(url, { headers, maxRetries: 2 })
    expect(response.ok(), `${url} returned HTTP ${response.status()}`).toBe(true)
    const { assets } = await response.json()
    const published = assets.map(({ browser_download_url }) => browser_download_url)

    const installers = new Set()
    for (const [platform, types] of [
      ['macos', ['.dmg']],
      ['windows', ['.exe', '.msi']],
      ['linux', ['.deb', '.rpm', 'AppImage']],
    ]) {
      const row = page.locator(`#${app} [data-platform="${platform}"]`)
      for (const type of types) {
        if (types.length > 1) {
          await row.getByRole('button').click()
          await row.getByRole('option').filter({ has: page.getByText(type, { exact: true }) }).click()
        }
        const href = await row.locator('.download-binary').getAttribute('href')
        expect(href?.endsWith(type), `${app} ${platform} ${type} file extension`).toBe(true)
        expect(published, `${app} ${platform} ${type}`).toContain(href)
        installers.add(href)
      }
    }
    expect(installers.size).toBe(6)
  }
})
