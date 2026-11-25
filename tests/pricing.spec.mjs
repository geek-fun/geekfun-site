import { expect, test } from '@playwright/test'

const stubPaymentConfig = async (page, baseURL, currencies) => {
  await page.route((url) => url.origin !== baseURL, (route) => route.abort())
  await page.route('**/api/v1/payments/provider', (route) =>
    route.fulfill({ json: { data: { currencies } } })
  )
}

const expectBilling = async (page, { yearly, monthly, currency }) => {
  const plan = page.locator('.plan-card.featured')
  const price = plan.locator('.plan-price')
  const alternative = plan.locator('.plan-alt')
  const checkout = plan.locator('.plan-cta')

  await expect(price).toHaveText(yearly)
  await expect(alternative).toContainText(monthly)
  await expect(checkout).toHaveAttribute('href', new RegExp(`\\?plan=YEARLY&currency=${currency}$`))

  await page.locator('.billing-toggle').getByRole('switch').click()
  await expect(price).toHaveText(monthly)
  await expect(alternative).toContainText(yearly)
  await expect(checkout).toHaveAttribute('href', new RegExp(`\\?plan=MONTHLY&currency=${currency}$`))
}

test('pricing formats the available currency for each site language', async ({ page, baseURL }) => {
  await stubPaymentConfig(page, baseURL, { USD: 'creem' })

  for (const [prefix, yearly, monthly] of [
    ['', 'USD 99.00', 'USD 9.90'],
    ['/zh', 'USD 99.00', 'USD 9.90'],
    ['/ja', 'USD 99.00', 'USD 9.90'],
    ['/ko', 'USD 99.00', 'USD 9.90'],
    ['/pt-BR', 'USD 99,00', 'USD 9,90'],
    ['/es', '99,00 USD', '9,90 USD'],
  ]) {
    await test.step(`${prefix}/pricing`, async () => {
      await page.goto(`${prefix}/pricing`)
      await expectBilling(page, { yearly, monthly, currency: 'USD' })
    })
  }

  const paymentFaq = page.locator('#faq details').filter({ hasText: '¿Qué métodos de pago' })
  await paymentFaq.locator('summary').click()
  await expect(paymentFaq.locator('p')).toContainText('Creem')
  await expect(paymentFaq.locator('p')).not.toContainText('Alipay')
})

test('Chinese pricing and checkout use CNY when enabled', async ({ page, baseURL }) => {
  await stubPaymentConfig(page, baseURL, { USD: 'creem', CNY: 'alipay' })
  await page.goto('/zh/pricing')
  await expectBilling(page, { yearly: 'CNY 199.00', monthly: 'CNY 19.90', currency: 'CNY' })

  const paymentFaq = page.locator('#faq details').filter({ hasText: '你们接受哪些支付方式？' })
  await paymentFaq.locator('summary').click()
  await expect(paymentFaq.locator('p')).toContainText('人民币（CNY）支付通过支付宝处理。')

  await page.goto('/ja/pricing')
  await expectBilling(page, { yearly: 'USD 99.00', monthly: 'USD 9.90', currency: 'USD' })
})
