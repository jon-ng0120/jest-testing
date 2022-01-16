const caesarCipher = (string, shift) => {
  const stringArr = string.split('');
  const cipheredString = stringArr.map((letter) => {
    return encryptString(letter, shift);
  });
  return cipheredString.join('');
};

const encryptString = (letter, shift) => {
  if (checkIfLetter(letter)) {
    const charCode = letter.toLowerCase().charCodeAt(0) - 97;
    const encrypted = (charCode + shift) % 26;
    if (letter == letter.toUpperCase()) {
      return String.fromCharCode(97 + encrypted).toUpperCase();
    }
    return String.fromCharCode(97 + encrypted);
  }
  return letter;
};

const checkIfLetter = (letter) => {
  const regExp = /[a-zA-Z]/;
  return regExp.test(letter);
};

export default caesarCipher;
