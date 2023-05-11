import reverseString from './reverseString';

test('Empty String', () => {
    expect(reverseString('')).toBe('');
});

test('Length of 1', () => {
    expect(reverseString('a')).toBe('a');
});

test('Length of 2', () => {
    expect(reverseString('ab')).toBe('ba');
});

test('Length of 3', () => {
    expect(reverseString('123')).toBe('321');
});

test('Length of 4', () => {
    expect(reverseString('abcd')).toBe('dcba');
});

test('With spaces', () => {
    expect(reverseString('Lorem ipsum dolor')).toBe('rolod muspi meroL');
});
