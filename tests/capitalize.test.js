import capitalize from '../code/capitalize';

test('Capitalize hello', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('Return only first letter capatilized', () => {
  expect(capitalize('hEllO wOrlD')).toBe('Hello world');
});
