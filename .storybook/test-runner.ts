import type { TestRunnerConfig } from '@storybook/test-runner'
import { getStoryContext } from '@storybook/test-runner'
import { checkA11y, configureAxe, injectAxe } from 'axe-playwright'

const config: TestRunnerConfig = {
  setup() {},
  async prepare({ page, browserContext, testRunnerConfig }) {
    const targetURL = 'http://127.0.0.1:6006'
    const iframeURL = new URL('iframe.html', targetURL).toString()

    if (testRunnerConfig?.getHttpHeaders) {
      const headers = await testRunnerConfig.getHttpHeaders(iframeURL)
      await browserContext.setExtraHTTPHeaders(headers)
    }

    await page.goto(iframeURL, { waitUntil: 'load' }).catch((err) => {
      if (err.message?.includes('ERR_CONNECTION_REFUSED')) {
        const errorMessage = `Could not access the Storybook instance at ${targetURL}. Are you sure it's running?\n\n${err.message}`
        throw new Error(errorMessage)
      }

      throw err
    })
  },
  async preVisit(page, context) {
    await injectAxe(page)
  },
  async postVisit(page, context) {
    const storyContext = await getStoryContext(page, context)
    if (storyContext.parameters?.a11y?.disable) {
      return
    }
    await configureAxe(page, {
      rules: storyContext.parameters?.a11y?.config?.rules,
    })
    await checkA11y(page, 'main', {
      includedImpacts: ['critical'],
      detailedReport: false,
      detailedReportOptions: { html: true },
      axeOptions: storyContext.parameters?.a11y?.options,
    })
  },
}

export default config
