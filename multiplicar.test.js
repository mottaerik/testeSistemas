const multiplicar = require('./multiplicar');

test('Multiplicar 2 números', ()=> {
    expect(multiplicar(10, 3)).toBe(30);
});

test('Multiplicar 2 números', ()=> {
    expect(multiplicar(0, 0)).toBe(1);
});

test('Multiplicar 2 números', ()=> {
    expect(multiplicar(5, 5)).toBe(25);
});