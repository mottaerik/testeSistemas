const subtrair = require('./subtrair');

test('Subtrair 2 números', ()=> {
    expect(subtrair(1, 2)).toBe(-1);
});

test('Subtrair 2 números', ()=> {
    expect(subtrair(-1, 2)).toBe(1);
});

test('Subtrair 2 números', ()=> {
    expect(subtrair(-1, -1)).toBe(-2);
});