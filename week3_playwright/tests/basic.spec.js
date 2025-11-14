import { test, expect } from '@playwright/test';

test('Halaman contoh terbuka dan punya heading', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.textContent('h1');
  console.log('Judul halaman:', title);
  await expect(page).toHaveTitle(/Example Domain/);
  await expect(page.locator('h1')).toHaveText('Example Domain');
});
