const  filtrarPares  = require('../src/array');

test('A função filtrarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) deve retornar [2, 4, 6, 8, 10]', () => {
    expect(filtrarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([2, 4, 6, 8, 10]);
});

test('A função filtrarPares([7, 9, 11, 13, 15]) deve retornar []', () => {
    expect(filtrarPares([7, 9, 11, 13, 15])).toEqual([]);
});

test('A função filtrarPares([0, -2, -3, 8]) deve retornar [0, -2, 8]', () => {
    expect(filtrarPares([0, -2, -3, 8])).toEqual([0, -2, 8]);
});
