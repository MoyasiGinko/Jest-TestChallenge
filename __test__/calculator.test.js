const Calculator = require('../calculator');

const calculator = new Calculator();
describe('Calculator', () => {
  describe('add', () => {
    test('Add numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });
  });

  describe('subtract', () => {
    test('Sub numbers', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });
  });

  describe('divide', () => {
    test('Divide numbers', () => {
      expect(calculator.divide(20, 4)).toBe(5);
    });
  });

  describe('multiply', () => {
    test('Multiply numbers', () => {
      expect(calculator.multiply(2, 8)).toBe(16);
    });
  });
});
