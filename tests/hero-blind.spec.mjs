import { expect, test } from '@playwright/test'

test.use({ reducedMotion: 'no-preference' })

test('flipped product cards cover the homepage actions', async ({ page, baseURL }) => {
  await page.route((url) => url.origin !== baseURL, (route) => route.abort())
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/')

  const hero = page.locator('.hero-blind')
  const actions = hero.locator('.hero-actions a')
  const panels = hero.locator('.blind-panel')
  const actionTargets = () => actions.evaluateAll((links) => links.map((link) => {
    const { left, top, width, height } = link.getBoundingClientRect()
    const target = document.elementFromPoint(left + width / 2, top + height / 2)
    return target?.closest('.blind-panel')?.getAttribute('aria-label') ?? target?.closest('a')?.textContent.trim()
  }))

  const flip = async (index) => {
    const panel = panels.nth(index)
    const { x, y, width } = await panel.boundingBox()
    await page.mouse.click(x + width / 2, y + 24)
    await expect(panel).toHaveClass(/is-open/)
    await expect.poll(() => panel.locator('.blind-inner').evaluate((inner) =>
      new DOMMatrix(getComputedStyle(inner).transform).m11,
    )).toBe(-1)
  }

  await expect.poll(actionTargets).toEqual(['Products', 'GitHub'])
  await flip(2)
  await expect.poll(actionTargets).toEqual(['Data Studio Agent', 'GitHub'])
  await flip(3)
  await expect.poll(actionTargets).toEqual(['Data Studio Agent', 'ServerlessInsight'])
})
