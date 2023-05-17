function reverseString(string) {
  const chars = string.split('');

  const reversedChars = chars.reverse();

  const reversedString = reversedChars.join('');

  return reversedString;
}

module.exports = reverseString;
