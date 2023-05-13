import caesarCipher from './caesarCipher';

test('Shift 1', () => {
    expect(caesarCipher('abcdef', 1)).toMatch(/bcdefg/);
});

test('Shift 5', () => {
    expect(caesarCipher('abcdef', 5)).toMatch(/fghijk/);
});

test('Test wrapping', () => {
    expect(caesarCipher('wxyz', 3)).toMatch(/zabc/);
});

test('Test same case', () => {
    expect(caesarCipher('AbcDef', 1)).toMatch(/BcdEfg/);
});

test('Test punctuation', () => {
    expect(caesarCipher('A.cD,f!', 1)).toMatch(/B.dE,g!/);
});
