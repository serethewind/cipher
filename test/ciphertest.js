const { caesarCipher } = require('../script');

test('encrypts correctly with key 3', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
});

test('decrypts correctly with key -3', () => {
    expect(caesarCipher('def', -3)).toBe('abc');
});

test('handles wrapping from z to a', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('keeps non-alphabet characters unchanged', () => {
    expect(caesarCipher('hello, world!', 3)).toBe('khoor, zruog!');
});
