import { test, expect } from '@playwright/test';

const baseURL = 'https://www.swifttranslator.com/';

const testCases = [
  {
    id: 'Pos_Fun_001',
    name: 'Simple Sentence',
    input: 'mama vaedata yanavaa',
    expected: 'මම වැඩට යනවා'
  },
  {
    id: 'Pos_Fun_002',
    name: 'Compound Sentence',
    input: 'mama kadeeta yanavaa, namuth vassa vahinavaa.',
    expected: 'මම කඩේට යනවා, නමුත් වස්ස වහිනවා.'
  },
  {
    id: 'Pos_Fun_003',
    name: 'Complex Sentence',
    input: 'api gedhara inne adha nivaadu nisaa',
    expected: 'අපි ගෙදර ඉන්නේ අද නිවාඩු නිසා'
  },
  {
    id: 'Pos_Fun_004',
    name: 'Interrogative (questions) forms',
    input: 'oyaa adha mokadha karannee?',
    expected: 'ඔයා අද මොකද කරන්නේ?'
  },
  {
    id: 'Pos_Fun_005',
    name: 'Imperative (commands) forms',
    input: 'poddak inna.',
    expected: 'පොඩ්ඩක් ඉන්න.'
  },
  {
    id: 'Pos_Fun_006',
    name: 'Positive forms',
    input: 'api adha gedhara inne.',
    expected: 'අපි අද ගෙදර ඉන්නේ.'
  },
  {
    id: 'Pos_Fun_007',
    name: 'Convert repeated words emphasis',
    input: 'hari hari, mama karannam',
    expected: 'හරි හරි, මම කරන්නම්'
  },
  {
    id: 'Pos_Fun_008',
    name: 'Convert date format',
    input: '2026-05-21 booking eka confirm dha?',
    expected: '2026-05-21 booking එක confirm ද?'
  },
  {
    id: 'Pos_Fun_009',
    name: 'Convert formatting multiple spaces',
    input: 'mama   adha oyaava        dhaekkaa',
    expected: 'මම   අද ඔයාව        දැක්කා'
  },
  {
    id: 'Pos_Fun_010',
    name: 'Convert Joined words without spaces',
    input: 'adhaapigedharainne',
    expected: 'අදාපිගෙදරෛන්නෙ'
  },
  {
    id: 'Pos_Fun_011',
    name: 'Convert currency format',
    input: 'Rs. 5000 ganna',
    expected: 'Rs. 5000 ගන්න'
  },
  {
    id: 'Pos_Fun_012',
    name: 'Convert english abbreviation',
    input: 'ID eka yavanna',
    expected: 'ID එක යවන්න'
  },
  {
    id: 'Pos_Fun_013',
    name: 'Convert a Request',
    input: 'mata adha potha dhenna puLuvandha?',
    expected: 'මට අද පොත දෙන්න පුළුවන්ද?'
  },
  {
    id: 'Pos_Fun_014',
    name: 'Convert slang phrase',
    input: 'siraavata ban,ehema karamu api',
    expected: 'සිරාවට බන්,එහෙම කරමු අපි'
  },
  {
    id: 'Pos_Fun_015',
    name: 'Convert formatting multi line',
    input: 'mama gamee aavaa.\noyaata monavadha enakota genna oonee?',
    expected: 'මම ගමේ ආවා.\nඔයාට මොනවද එනකොට ගෙන්න ඕනේ?'
  },
  {
    id: 'Pos_Fun_016',
    name: 'Convert time format',
    input: 'meeting eka 8.45 AM ta patan gannavaa.',
    expected: 'meeting එක 8.45 AM ට පටන් ගන්නවා.'
  },
  {
    id: 'Pos_Fun_017',
    name: 'Convert punctuation marks',
    input: '“meeka hariyata vaeda karanavaa” kiyala eyaa kivvaa.',
    expected: '“මේක හරියට වැඩ කරනවා” කියල එයා කිව්වා.'
  },
  {
    id: 'Pos_Fun_018',
    name: 'Convert long paragraph',
    input: `mama hithanavaa me project eka ivara karanna thava sathi dhekak vage yayidha kiyala, mokadha thava vaeda godhak ithuru velaa thiyenavaa, api hamooma ekathu velaa vaeda kaloth apita puluvan ikmanata meka ivara karalaa dhenna.`,
    expected: 'මම හිතනවා මෙ project එක ඉවර කරන්න තව සති දෙකක් වගෙ යයිද කියල, මොකද තව වැඩ ගොදක් ඉතුරු වෙලා තියෙනවා, අපි හමෝම එකතු වෙලා වැඩ කලොත් අපිට පුලුවන් ඉක්මනට මෙක ඉවර කරලා දෙන්න.'
  },
  {
    id: 'Pos_Fun_019',
    name: 'Convert sentences with places and common english words',
    input: 'mama heta lunch gannee hotel ekakin.',
    expected: 'මම හෙට lunch ගන්නේ hotel එකකින්.'
  },
  {
    id: 'Pos_Fun_020',
    name: 'Convert sentences with brand terms',
    input: 'mata receipt eka Email karanna',
    expected: 'මට receipt එක Email කරන්න'
  },
  {
    id: 'Pos_Fun_021',
    name: 'Convert Request forms with varying degrees of politeness',
    input: 'karuNaakaralaa eeka poddak balanna puLuvandha?',
    expected: 'කරුණාකරලා ඒක පොඩ්ඩක් බලන්න පුළුවන්ද?'
  },
  {
    id: 'Pos_Fun_022',
    name: 'Convert plural sentences',
    input: 'api heta pansal yamu',
    expected: 'අපි හෙට පන්සල් යමු'
  },
  {
    id: 'Pos_Fun_023',
    name: 'Convert singular sentence',
    input: 'mama poLata yanna hadhannee',
    expected: 'මම පොළට යන්න හදන්නේ'
  },
  {
    id: 'Pos_Fun_024',
    name: 'Convert negation patterns',
    input: 'mama adha enne naehae.',
    expected: 'මම අද එන්නෙ නැහැ.'
  },
  {
    id: 'Pos_Fun_025',
    name: 'Convert simple future tense sentence',
    input: 'eyaa heta viBhaagaya liyanavaa',
    expected: 'එයා හෙට විභාගය ලියනවා'
  },
  {
    id: 'Pos_Fun_026',
    name: 'Convert simple past tense sentences',
    input: 'eyaa iiyee raeeta kaevaa',
    expected: 'එයා ඊයේ රෑට කැවා'
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
