const stringLength = require('../stringLength');

test('returns the correct character count for a string', () => {
  expect(stringLength('Hello')).toBe(5);
  expect(stringLength('Testing')).toBe(7);
});

test('throws an error if the string is empty', () => {
  expect(() => {
    stringLength('');
  }).toThrow('String must have at least 1 character');
});

test('throws an error if the string is longer than 10 characters', () => {
  expect(() => {
    stringLength('This is a long string');
  }).toThrow('String cannot have more than 10 characters');
});
