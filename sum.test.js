const sum = require('./sum');

test('Somar 2 números', ()=> {
    expect(sum(1, 2)).toBe(3);
});

test('Somar 2 números', ()=> {
    expect(sum(70, 22)).toBe(92);
});