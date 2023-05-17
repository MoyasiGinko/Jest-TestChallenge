function stringLength(string) {
  if (string.length < 1) {
    throw new Error('String must have at least 1 character');
  }

  if (string.length > 10) {
    throw new Error('String cannot have more than 10 characters');
  }

  return string.length;
}

module.exports = stringLength;
