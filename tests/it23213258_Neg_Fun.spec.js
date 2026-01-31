import { test, expect } from '@playwright/test';

const baseURL = 'https://www.swifttranslator.com/';

const testCases = [
  {
    id: 'Neg_Fun_001',
    name: 'Incorrect spelling',
    input: 'mama yannada?',
    expected: 'මම යන්නද?'
  },
  {
    id: 'Neg_Fun_002',
    name: 'Extreme Joined Words',
    input: 'mamagedharayanavamataofficeyannabae',
    expected: 'මමගෙදරයනවාමටofficeයන්නබැ'
  },
  {
    id: 'Neg_Fun_003',
    name: 'Irregular Capitalization',
    input: 'MaMa GeDhArA YaNaVaA',
    expected: 'මම ගෙදර යනවා'
  },
  {
    id: 'Neg_Fun_004',
    name: 'English word spelling mistake',
    input: 'oyaage vaeda ivara nam apita librry yanna puluvan.',
    expected: 'ඔයාගෙ වැඩ ඉවර නම් අපිට library යන්න පුලුවන්.'
  },
  {
    id: 'Neg_Fun_005',
    name: 'English short forms',
    input: 'oyaage number eka evanna plz',
    expected: 'ඔයාගෙ number එක එවන්න please'
  },
  {
    id: 'Neg_Fun_006',
    name: 'Case Sensitivity',
    input: 'MAMA Gedhara',
    expected: 'මම ගෙදර'
  },
  {
    id: 'Neg_Fun_007',
    name: 'Mixed Numeric Values',
    input: 'mata 2k dhenna',
    expected: 'මට දෙකක් දෙන්න'
  },
  {
    id: 'Neg_Fun_008',
    name: 'Sinhala and english words same pronunciation',
    input: 'oyaa enakam man innam.',
    expected: 'ඔයා එනකම් මන් ඉන්නම්.'
  },
  {
    id: 'Neg_Fun_009',
    name: 'Capitalization',
    input: 'eka thamayi mama kivve, Boru karanna epaa kiyala haemadhaama.',
    expected: 'එක තමයි මම කිව්වෙ, බොරු කරන්න එපා කියල හැමදාම.'
  },
  {
    id: 'Neg_Fun_010',
    name: 'English letter mismatch',
    input: 'saarthaka anagathayac weewa!',
    expected: 'සාර්තක අනගතයක් වේවා!'
  }
];

for (const tc of testCases) {
  test(`${tc.id} - ${tc.name}`, async ({ page }) => {
    await page.goto(baseURL);

    const inputBox = page.locator('textarea').first();
    await expect(inputBox).toBeVisible();

    await inputBox.fill(tc.input);

    await expect(page.locator('body')).toContainText(tc.expected);
  });
}