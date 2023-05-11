import capitalize from './capitalize';

test('Already capitalized', () => {
    expect(capitalize('String')).toBe('String');
});

test('General case', () => {
    expect(capitalize('string')).toBe('String');
});

test('Uppers in middle', () => {
    expect(capitalize('StRiNg')).toBe('StRiNg');
});

test('With spaces', () => {
    expect(capitalize('spaces spaces spa...')).toBe('Spaces spaces spa...');
});

test('No letters', () => {
    expect(capitalize('035846')).toBe('035846');
});

test('With non alphabet letters characters in middle', () => {
    expect(capitalize('5tr.1n9')).toBe('5tr.1n9');
});
