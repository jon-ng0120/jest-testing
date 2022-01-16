import caesarCipher from '../code/caesarCipher';

test('Cipher one string', () => {
  expect(caesarCipher('hello', 1)).toBe('ifmmp');
});

test('Cipher multiple strings', () => {
  expect(caesarCipher('hello world, welcome', 5)).toBe('mjqqt btwqi, bjqhtrj');
});

test('Cipher with upper and lower case', () => {
  expect(caesarCipher('ApPlEs', 4)).toBe('EtTpIw');
});

test('Cipher with multiple upper and lower case', () => {
  expect(caesarCipher('Mary Had a LitTle LamB!', 9)).toBe(
    'Vjah Qjm j UrcCun UjvK!'
  );
});
