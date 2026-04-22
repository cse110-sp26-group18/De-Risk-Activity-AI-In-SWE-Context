// @ts-check
const { test, expect } = require('@playwright/test');

const PAGE_PATH = '/versions/slot-machine-v22.html';

test('core elements are visible on load', async ({ page }) => {
  await page.goto(PAGE_PATH);
  await expect(page.locator('#spinBtn')).toBeVisible();
  await expect(page.locator('#betInput')).toBeVisible();
  await expect(page.locator('#balVal')).toBeVisible();
  await expect(page.locator('#winBanner')).toBeVisible();
});

test('#winBanner remains in DOM after clicking #spinBtn', async ({ page }) => {
  await page.goto(PAGE_PATH);
  await page.locator('#spinBtn').click();
  await expect(page.locator('#winBanner')).toBeVisible();
});
