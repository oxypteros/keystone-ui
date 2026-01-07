// @ts-check
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('Homepage should not have any accessibility violations', async ({ page }) => {
  await page.goto('/');

  // Analyze the page
  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  // Assert there are 0 violations
  expect(accessibilityScanResults.violations).toEqual([]);
});
