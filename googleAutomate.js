import { Selector } from 'testcafe';

fixture `Google Search`
    .page `https://www.google.com`;

test('Search a term that has results', async t => {
    await t
        .typeText(Selector('#APjFqb'), 'Blossom')
        .pressKey('enter');

    const results = Selector('#search');
    await t.expect(results.exists).ok();

    const stats = Selector('#result-stats');
    await t.expect(stats.exists).ok();
});
