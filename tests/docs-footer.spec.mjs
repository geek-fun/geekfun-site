import { expect, test } from '@playwright/test'

test('desktop docs navigation clears the footer', async ({ page, baseURL }) => {
  await page.setViewportSize({ width: 2560, height: 1140 })
  await page.route((url) => url.origin !== baseURL, (route) => route.abort())
  await page.goto('/zh/docs/sqlkit/connect-to-database')

  const footer = page.locator('.geekfun-footer')
  const firstProduct = footer.getByRole('link', { name: 'DocKit', exact: true })
  await firstProduct.scrollIntoViewIfNeeded()

  const footerTop = (await footer.boundingBox()).y
  for (const selector of ['.VPSidebar', '.aside-container']) {
    const { y, height } = await page.locator(selector).boundingBox()
    expect(y + height).toBeLessThanOrEqual(footerTop + 1)
  }

  await firstProduct.click({ trial: true })
})
