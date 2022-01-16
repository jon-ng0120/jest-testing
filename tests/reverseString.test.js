import reverseString from '../code/reverseString';

test('Reverse single string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('Reverse multiple string', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('Reverse multiple string with punctuation', () => {
  expect(reverseString('hello world, welcome')).toBe('emoclew ,dlrow olleh');
});
