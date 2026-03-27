import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('navigates to Learn page', async ({ page }) => {
    await page.goto('/');
    await page.locator('#menu-toggle').click();
    await page.locator('#Nav-Links').getByRole('link', { name: 'Learn', exact: true }).click();
    await expect(page).toHaveURL(/learn\.html/);
  });

  test('navigates to History page', async ({ page }) => {
    await page.goto('/');
    await page.locator('#menu-toggle').click();
    await page.locator('#Nav-Links').getByRole('link', { name: 'History', exact: true }).click();
    await expect(page).toHaveURL(/culture\.html/);
  });

  test('navigates to Stories page', async ({ page }) => {
    await page.goto('/');
    await page.locator('#menu-toggle').click();
    await page.locator('#Nav-Links').getByRole('link', { name: 'Stories', exact: true }).click();
    await expect(page).toHaveURL(/stories\.html/);
  });

  test('logo navigates back to homepage', async ({ page }) => {
    await page.goto('/html/learn.html');
    await page.locator('#headerLogo').click();
    await expect(page).toHaveURL(/index\.html/);
  });
});

test.describe('Learn page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/html/learn.html');
  });

  test('has header logo', async ({ page }) => {
    await expect(page.locator('#headerLogo')).toBeVisible();
  });

  test('page loads without errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));
    await page.goto('/html/learn.html');
    await page.waitForLoadState('networkidle');
    expect(errors).toHaveLength(0);
  });
});

test.describe('Culture / Histories page', () => {
  test('page loads without errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));
    await page.goto('/html/culture.html');
    await page.waitForLoadState('networkidle');
    expect(errors).toHaveLength(0);
  });
});

test.describe('Stories page', () => {
  test('page loads without errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));
    await page.goto('/html/stories.html');
    await page.waitForLoadState('networkidle');
    expect(errors).toHaveLength(0);
  });
});
