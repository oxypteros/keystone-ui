// @ts-check
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { globSync } from 'glob';

// Define your compliance standard here
const COMPLIANCE_TAGS = ['wcag22a', 'wcag22aa', 'wcag22aaa', 'best-practice'];

// Define pages to ignore
const EXCLUDED_PATHS = ['/404.html', '/broken-page/', '/categories/', '/tags/'];

// Find all HTML files
const htmlFiles = globSync('public/**/*.html');

// Process files into URLs and Filter
const urls = htmlFiles
  .map((file) => {
    let route = file.replaceAll('\\', '/').replace('public', '').replace('index.html', '');
    return route;
  })
  .filter((url) => {
    // Check exact matches
    const isExplicitlyExcluded = EXCLUDED_PATHS.includes(url);

    // Check section prefixes
    const isSectionExcluded = EXCLUDED_PATHS.some((excluded) => url.startsWith(excluded));

    // Keep the URL ONLY if it fails both exclusion checks
    return !isExplicitlyExcluded && !isSectionExcluded;
  });

test.describe('Full Site A11y Check', () => {
  for (const url of urls) {
    test(`check ${url} against ${COMPLIANCE_TAGS.join(', ')}`, async ({ page }) => {
      await page.goto(url);

      const results = await new AxeBuilder({ page }).withTags(COMPLIANCE_TAGS).analyze();

      expect(results.violations).toEqual([]);
    });
  }
});
