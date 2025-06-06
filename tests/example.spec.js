const { test, expect } = require('@playwright/test');

test('пример e2e теста', async ({ page }) => {
  // Открываем страницу
  await page.goto('https://example.com');

  // Проверяем, что заголовок содержит 'Example Domain'
  await expect(page).toHaveTitle(/Example Domain/);

  // Проверяем, что на странице есть текст 'Example Domain'
  const text = await page.textContent('h1');
  expect(text).toBe('Example Domain');
});
