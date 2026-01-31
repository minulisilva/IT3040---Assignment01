import { test, expect } from '@playwright/test';

const baseURL = 'https://www.swifttranslator.com/';

test.describe('Positive UI Test - Real-time Output Update', () => {
  test('Pos_UI_001 - Output updates in real-time as user types', async ({ page }) => {
    await page.goto(baseURL, { waitUntil: 'domcontentloaded' });

    const inputBox = page.locator('textarea').first();
    await expect(inputBox).toBeVisible({ timeout: 15000 });
    await expect(inputBox).toBeEditable();

    const outputBox = page.locator(
      'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50'
    );
    await expect(outputBox).toBeAttached({ timeout: 15000 });
    await expect(outputBox).toBeVisible({ timeout: 15000 });

    const readOutput = async () => (await outputBox.innerText().catch(() => '')).trim();

    await inputBox.fill('');
    const baseline = await readOutput();

    const chunks = ['mama', ' mama heta', ' mama heta enavaa'];
    let previousOutput = baseline;

    for (const chunk of chunks) {
      await inputBox.fill(chunk);

      await expect
        .poll(async () => await readOutput(), {
          timeout: 20000,
          intervals: [300, 500, 800, 1200],
        })
        .not.toBe(previousOutput);

      const now = await readOutput();
      console.log(`Input: "${chunk}" → Output:`, now || '(empty)');
      previousOutput = now;
    }

    expect(previousOutput, 'Output should not be empty after typing a full sentence').not.toBe('');
  });

});