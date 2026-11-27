import { readFile } from 'node:fs/promises'
import { expect, test } from '@playwright/test'

const dist = new URL('../dist/', import.meta.url)
const locales = ['pt-BR', 'ja', 'ko', 'es']
const localizedPaths = [
  '/', '/download', '/pricing', '/blog', '/news', '/about', '/docs',
  '/products/dockit/', '/products/sqlkit/', '/products/data-studio-agent/',
  '/docs/sqlkit/', '/docs/sqlkit/capabilities', '/docs/sqlkit/installation', '/docs/sqlkit/connect-to-database',
  '/docs/sqlkit/agentic-datastudio', '/docs/sqlkit/mcp-bridge', '/docs/sqlkit/ai-permissions',
  '/docs/sqlkit/query-editor', '/docs/sqlkit/keyboard-shortcuts',
  '/docs/sqlkit/mysql-gui-client', '/docs/sqlkit/postgresql-gui-client',
  '/docs/sqlkit/sql-server-gui-client', '/docs/sqlkit/oracle-gui-client', '/docs/sqlkit/sqlite-gui-client',
  '/docs/dockit/', '/docs/dockit/installation', '/docs/dockit/connect-to-server', '/docs/dockit/shortcut',
  '/docs/dockit/search-editor', '/docs/dockit/mongodb-workspace', '/docs/dockit/dynamodb-query-editor',
]

test('sitemap pages publish matching canonical and language URLs', async () => {
  const sitemap = await readFile(new URL('sitemap.xml', dist), 'utf8')
  expect(sitemap).not.toContain('/zh-TW/')
  const pages = [...sitemap.matchAll(/<url>(.*?)<\/url>/gs)].map(([, entry]) => {
    const url = entry.match(/<loc>(.*?)<\/loc>/)[1]
    const alternates = [...entry.matchAll(/hreflang="([^"]+)" href="([^"]+)"/g)]
      .map(([, lang, href]) => [lang, href])
    return { url, alternates }
  })
  expect(pages.length).toBeGreaterThan(0)
  const published = new Set(pages.map(({ url }) => url))
  for (const lang of locales) {
    for (const path of localizedPaths) {
      const url = `https://www.geekfun.club/${lang}${path}`
      expect(published.has(url), url).toBe(true)
    }
  }

  for (const { url, alternates } of pages) {
    const { pathname, origin } = new URL(url)
    const pageFile = pathname.slice(1) + (pathname.endsWith('/') ? 'index.html' : '.html')
    const html = await readFile(new URL(pageFile, dist), 'utf8')
    const canonical = [...html.matchAll(/<link rel="canonical" href="([^"]+)"/g)].map(([, href]) => href)
    expect(canonical, url).toEqual([url])

    const htmlAlternates = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)]
      .map(([, lang, href]) => [lang, href])
    expect(htmlAlternates.sort(), url).toEqual(alternates.sort())
    expect(alternates.every(([, href]) => published.has(href)), url).toBe(true)

    const menus = [...html.matchAll(/<nav[^>]*class="language-options"[^>]*>(.*?)<\/nav>/gs)]
    const menuLinks = menus.flatMap(([, menu]) => [...menu.matchAll(/<a href="([^"]+)" lang="([^"]+)" hreflang="[^"]+"/g)])
      .map(([, href, lang]) => [lang, new URL(href, origin).href])
    expect(menuLinks.sort(), url).toEqual(
      alternates.filter(([lang, href]) => lang !== 'x-default' && href !== url).sort(),
    )

    expect(html, url).not.toMatch(/property="twitter:/)
    expect(html, url).toContain('name="twitter:title"')
    expect(html, url).toContain('name="twitter:description"')
    expect(html, url).toContain('name="twitter:image"')

    const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? ''
    expect(title, url).not.toMatch(/GEEKFUN.*GEEKFUN|极客范.*极客范/i)

    const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
      .map(([, raw]) => JSON.parse(raw))
    expect(schemas.some((schema) => schema['@type'] === 'Organization'), url).toBe(true)
    for (const schema of schemas.filter((s) => s['@type'] === 'SoftwareApplication')) {
      const offers = Array.isArray(schema.offers) ? schema.offers : [schema.offers]
      expect(offers.length, url).toBeGreaterThan(0)
      for (const offer of offers) {
        expect(offer?.price, url).toBeDefined()
        expect(offer?.priceCurrency, url).toBeDefined()
      }
    }
  }
})

test.describe('language navigation', () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await page.route((url) => url.origin !== baseURL, (route) => route.abort())
  })

  for (const { path, label, mobile, translatedHome, targetLang } of [
    { path: '/', label: 'Change language', mobile: false, translatedHome: '/zh/', targetLang: 'ja' },
    { path: '/zh/', label: '切换语言', mobile: true, translatedHome: '/', targetLang: 'es' },
  ]) {
    test(`homepage ${path} offers every site language`, async ({ page, request }) => {
      await page.setViewportSize(mobile ? { width: 390, height: 844 } : { width: 1100, height: 800 })
      await page.goto(`${path}#products`)
      if (mobile) await page.getByRole('button', { name: 'mobile navigation' }).click()
      else await page.getByRole('button', { name: label }).hover()

      const menu = page.getByRole('navigation', { name: label })
      await expect(menu.locator('[aria-current="true"]')).toHaveAttribute('lang', path === '/' ? 'en' : 'zh')
      await expect(menu.getByRole('link')).toHaveCount(5)
      await expect(menu.locator(`a[href="${translatedHome}#products"]`)).toHaveCount(1)
      for (const lang of locales) {
        const href = `/${lang}/`
        await expect(menu.locator(`a[lang="${lang}"]`)).toHaveAttribute('href', `${href}#products`)
        const response = await request.get(href)
        await expect(response).toBeOK()
        expect(await response.text()).toContain(`<html lang="${lang}"`)
      }

      await menu.locator(`a[lang="${targetLang}"]`).click()
      await expect(page.locator('html')).toHaveAttribute('lang', targetLang)
      await expect(page).toHaveURL(`/${targetLang}/#products`)
    })
  }

  test('desktop menu uses the translations of the current page', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'no-preference' })
    await page.setViewportSize({ width: 1100, height: 800 })
    await page.goto('/docs/sqlkit/connect-to-database#add-and-test-a-connection')
    await page.getByRole('button', { name: 'Change language' }).hover()
    const links = page.getByRole('navigation', { name: 'Change language' }).getByRole('link')
    await expect(links).toHaveCount(5)
    const japanese = links.filter({ hasText: '日本語' })
    await expect(japanese).toHaveAttribute('href', '/ja/docs/sqlkit/connect-to-database')

    const popover = page.locator('#site-language-menu')
    await expect(popover).not.toHaveClass(/language-menu-enter-/)
    await popover.evaluate((menu) => {
      menu.addEventListener('transitionrun', (event) => {
        if (event.target === menu && event.propertyName === 'opacity' && menu.inert) {
          menu.dataset.exitAnimated = 'true'
        }
      })
    })
    await japanese.click()
    await expect(page).toHaveURL('/ja/docs/sqlkit/connect-to-database')
    await expect(page.locator('html')).toHaveAttribute('lang', 'ja')

    const trigger = page.getByRole('button', { name: '言語を変更' })
    const menu = page.getByRole('navigation', { name: '言語を変更' })
    await expect(trigger).toHaveAttribute('aria-expanded', 'false')
    await expect(menu).toBeHidden()
    await expect(popover).toHaveAttribute('data-exit-animated', 'true')

    await trigger.press('Enter')
    await expect(menu).toBeVisible()
    await expect(menu.locator('[aria-current="true"]')).toHaveText('日本語')
    await trigger.press('Escape')
    await expect(menu).toBeHidden()
    await expect(trigger).toBeFocused()
  })

  test('switching languages preserves the header order and local product links', async ({ page }) => {
    await page.setViewportSize({ width: 1100, height: 800 })
    await page.goto('/')
    const header = page.locator('.VPNavBarMenu')
    const items = header.locator(':scope > a, :scope > .mega-menu-wrapper > button')
    await expect(items).toHaveText(['Home', 'Products', 'Download', 'Pricing', 'Docs', 'Blog', 'News'])

    await page.getByRole('button', { name: 'Change language' }).hover()
    await page.getByRole('navigation', { name: 'Change language' }).getByRole('link', { name: 'Português (BR)' }).click()
    await expect(page).toHaveURL('/pt-BR/')
    await expect(items).toHaveText(['Início', 'Produtos', 'Download', 'Preços', 'Documentação', 'Blog', 'Notícias'])
    await expect(header.getByRole('link', { name: 'Início' })).toHaveAttribute('href', '/pt-BR/')
    await expect(header.getByRole('link', { name: 'Documentação' })).toHaveAttribute('href', '/pt-BR/docs')
    await expect(header.getByRole('link', { name: 'Notícias' })).toHaveAttribute('href', '/pt-BR/news')

    await header.getByRole('button', { name: 'Produtos' }).hover()
    await expect(header.getByRole('menuitem', { name: /^DocKit/ })).toHaveAttribute('href', '/pt-BR/products/dockit/')
    await expect(header.getByRole('menuitem', { name: /^SqlKit/ })).toHaveAttribute('href', '/pt-BR/products/sqlkit/')
  })

  test('Korean navigation and product actions stay in Korean', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 })
    await page.goto('/')
    await page.getByRole('button', { name: 'Change language' }).hover()
    await page.getByRole('navigation', { name: 'Change language' }).getByRole('link', { name: '한국어' }).click()
    await expect(page).toHaveURL('/ko/')
    await expect(page.getByRole('heading', { level: 1 })).toContainText('오픈 소스 스튜디오')

    const header = page.locator('.VPNavBarMenu')
    await header.getByRole('link', { name: '가격' }).click()
    await expect(page).toHaveURL('/ko/pricing')
    await expect(page.getByRole('heading', { name: '요금제 선택' })).toBeVisible()
    await page.locator('.geekfun-pricing-page').getByRole('link', { name: '다운로드', exact: true }).click()
    await expect(page).toHaveURL('/ko/download')
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('다운로드')
    await page.locator('#sqlkit .download-links a[href="/ko/products/sqlkit/"]').click()
    await expect(page).toHaveURL('/ko/products/sqlkit/')

    await header.getByRole('link', { name: '블로그' }).click()
    await expect(page).toHaveURL('/ko/blog')
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('블로그')
    await header.getByRole('link', { name: '소식' }).click()
    await expect(page).toHaveURL('/ko/news')
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('소식')
    await header.getByRole('link', { name: '홈' }).click()
    await expect(page).toHaveURL('/ko/')
    await expect(page.locator('html')).toHaveAttribute('lang', 'ko')
  })

  test('SqlKit product pages link to the illustrated capabilities guide', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1000 })
    for (const [lang, prefix] of [['en', ''], ['zh', '/zh']]) {
      await page.goto(`${prefix}/products/sqlkit/`)
      const features = page.locator('.features-section')
      await expect(features.locator('.feature-card')).toHaveCount(6)
      await features.locator('.features-guide').click()
      const path = `${prefix}/docs/sqlkit/capabilities`
      await expect(page).toHaveURL(path)
      await expect(page.locator('html')).toHaveAttribute('lang', lang)
      await expect(page.locator('.docs-figure img')).toHaveCount(5)
      await page.locator('.VPDocAsideOutline a[href="#schema"]').click()
      await expect(page).toHaveURL(`${path}#schema`)
      await expect(page.locator('#schema')).toBeInViewport()
    }
  })

  test('SqlKit AI and MCP setup stays in the selected language', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1000 })
    await page.goto('/ko/docs/sqlkit/')

    const sidebar = page.locator('.VPSidebar')
    await expect(sidebar.getByText('AI 및 MCP', { exact: true })).toBeVisible()
    await sidebar.getByRole('link', { name: 'Agentic Data Studio', exact: true }).click()
    await expect(page).toHaveURL('/ko/docs/sqlkit/agentic-datastudio')
    await expect(page.locator('#configure-a-provider')).toBeVisible()

    await sidebar.getByRole('link', { name: 'MCP 설정', exact: true }).click()
    await expect(page).toHaveURL('/ko/docs/sqlkit/mcp-bridge')
    const examples = page.locator('.vp-code-group')
    await expect(examples.locator('pre:visible')).toContainText('codex mcp add')
    await examples.getByText('Claude Code', { exact: true }).click()
    await expect(examples.locator('pre:visible')).toContainText('claude mcp add --transport stdio')
    await examples.getByText('Cursor', { exact: true }).click()
    await expect(examples.locator('pre:visible')).toContainText('"mcpServers"')

    await sidebar.getByRole('link', { name: 'AI 권한', exact: true }).click()
    await expect(page).toHaveURL('/ko/docs/sqlkit/ai-permissions')
    await expect(page.locator('html')).toHaveAttribute('lang', 'ko')
    await expect(page.locator('#connection-permissions')).toBeVisible()
  })

  test('mobile menu can switch a translated download page', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/download#developer-tools')
    const trigger = page.getByRole('button', { name: 'mobile navigation' })
    await trigger.click()
    const menu = page.getByRole('navigation', { name: 'Change language' })
    await expect(menu.getByRole('link')).toHaveCount(5)
    await menu.getByRole('link', { name: 'Español' }).click()
    await expect(page).toHaveURL('/es/download#developer-tools')
    await expect(page.locator('html')).toHaveAttribute('lang', 'es')
    await expect(page.locator('.VPNavBarTitle a')).toHaveAttribute('href', '/es/')
    await expect(trigger).toHaveAttribute('aria-expanded', 'false')
    await trigger.click()
    const spanishMenu = page.getByRole('navigation', { name: 'Cambiar idioma' })
    await expect(spanishMenu.locator('[aria-current="true"]')).toHaveText('Español')
  })

  test('tablet keeps the language menu and navigation inside the viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 800 })
    await page.goto('/pt-BR/docs/sqlkit/connect-to-database')
    await expect(page.locator('.VPNavBar')).toBeInViewport()
    await page.getByRole('button', { name: 'mobile navigation' }).click()
    await expect(page.getByRole('navigation', { name: 'Alterar idioma' }).getByRole('link', { name: 'Español' })).toBeInViewport()
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(1024)
    await page.getByRole('button', { name: 'Produtos' }).click()
    await expect(page.getByRole('menuitem', { name: /^SqlKit/ })).toHaveAttribute('href', '/pt-BR/products/sqlkit/')
  })

  test.describe('with a Chinese browser locale', () => {
    test.use({ locale: 'zh-TW' })

    test('serves requested languages and preserves the English version', async ({ page }) => {
      await page.goto('/es/download#developer-tools')
      await expect(page).toHaveURL('/es/download#developer-tools')
      await expect(page.locator('html')).toHaveAttribute('lang', 'es')
      await page.goto('/docs/sqlkit/installation')
      await expect(page.locator('html')).toHaveAttribute('lang', 'en')
      await expect(page).toHaveURL('/docs/sqlkit/installation')
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

  test('localized landing pages link to guides and label English fallbacks', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/ja/docs')
    await expect(page.getByRole('heading', { name: 'ドキュメント', exact: true })).toBeVisible()
    await page.locator('.docs-product').filter({ has: page.getByRole('heading', { name: 'DocKit' }) })
      .getByRole('link', { name: 'MongoDB のクエリ' }).click()
    await expect(page).toHaveURL('/ja/docs/dockit/mongodb-workspace')
    await page.getByRole('button', { name: 'ドキュメントメニュー' }).click()
    await page.getByRole('link', { name: 'Query history (英語)' }).click()
    await expect(page).toHaveURL('/docs/dockit/query-history')
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  })

  test('localized product page links to its database guides', async ({ page }) => {
    await page.goto('/pt-BR/products/sqlkit/')
    await expect(page.getByRole('heading', { level: 1 })).toContainText('SqlKit')
    await page.getByRole('link', { name: 'PostgreSQL', exact: true }).click()
    await expect(page).toHaveURL('/pt-BR/docs/sqlkit/postgresql-gui-client')
    await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR')
  })
})
