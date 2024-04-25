const dividir = require('./dividir');

test('Dividir 2 números', ()=> {
    expect(dividir(6, 2)).toBe(3);
});

test('Dividir 2 números', ()=> {
    expect(dividir(1000, 5)).toBe(200);
});

test('Dividir 2 números', ()=> {
    expect(dividir(-100, 5)).toBe(-25);
});