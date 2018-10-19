import {Selector as selector} from 'testcafe';

fixture('Getting Started')
    .page('../../docs/index.html');

test('Demo page open and element exists', async t => {
    const inputExists = selector('input').exists;

    await t
        .expect(inputExists).ok();
});

test('Date attribute is set', async t => {
    const input = await selector('input');

    await t
        .expect(input.hasAttribute('data-is-empty')).ok();
});

test('Fill and clear field', async t => {
    const input = selector('input');
    await t
        .typeText('input', 'John Smith')
        .expect(input.getAttribute('data-is-empty')).eql('false')
        .pressKey('ctrl+a delete')
        .expect(input.getAttribute('data-is-empty')).eql('true');
});
