const reverseString = require('../reverseString');

test('reverse the string', () => {
    expect(reverseString('Hello')).toBe('olleH');
    expect(reverseString('Awesome')).toBe('emosewA');
    expect(reverseString('H 2 O')).toBe('O 2 H');
    expect(reverseString('')).toBe('');
 });
