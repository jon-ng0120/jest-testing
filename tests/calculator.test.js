import calculator from '../code/calculator';

test('add two numbers', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtract two numbers', () => {
  expect(calculator.subtract(5, 1)).toBe(4);
});

test('multiply two numbers', () => {
  expect(calculator.multiply(5, 5)).toBe(25);
});

test('divide two numbers', () => {
  expect(calculator.divide(6, 2)).toBe(3);
});
