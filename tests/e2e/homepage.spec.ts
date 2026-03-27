import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has correct page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Crow Language/i);
  });

  test('header logo is visible', async ({ page }) => {
    const logo = page.locator('#headerLogo');
    await expect(logo).toBeVisible();
  });

  test('navigation links are present', async ({ page }) => {
    await page.locator('#menu-toggle').click();
    const nav = page.locator('#Nav-Links');
    await expect(nav).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Learn' })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'History', exact: true })).toBeVisible();
    await expect(nav.getByRole('link', { name: 'Stories', exact: true })).toBeVisible();
  });

  test('hero image loads', async ({ page }) => {
    const hero = page.locator('.titleimage');
    await expect(hero).toBeVisible();
  });

  test('goal section text is visible', async ({ page }) => {
    const heading = page.getByRole('heading', { name: /What is our goal/i });
    await expect(heading).toBeVisible();
  });

  test('Learn & Translate card links to learn page', async ({ page }) => {
    const card = page.getByRole('link', { name: /Learn & Translate/i });
    await expect(card).toHaveAttribute('href', /learn\.html/);
  });

  test('History & Treaties card links to culture page', async ({ page }) => {
    const card = page.getByRole('link', { name: /History & Treaties/i });
    await expect(card).toHaveAttribute('href', /culture\.html/);
  });
});
