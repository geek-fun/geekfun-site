import { defineConfig } from '@playwright/test'

const baseURL = 'http://127.0.0.1:4173'

export default defineConfig({
  testDir: './tests',
  reporter: 'line',
  outputDir: 'node_modules/.cache/playwright',
  use: { baseURL, reducedMotion: 'reduce' },
  webServer: {
    command: 'npm run docs:preview -- --host 127.0.0.1 --port 4173 --strictPort',
    url: baseURL,
  },
})
