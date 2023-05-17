const capitalize = require('../capitalization');

test('capitalizes the first character of a string', () => {
  const result = capitalize('hello');
  expect(result).toBe('Hello');
});
