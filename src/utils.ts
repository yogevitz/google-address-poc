import { ADDRESS_LETTERS, CodeLetters } from './types';

export const strToAddressFields = (str: any) => {
  const map = Array.prototype.map;
  return map.call(str, codeLetterToAddressField);
};

const codeLetterToAddressField = (letter: CodeLetters) =>
  ADDRESS_LETTERS[letter];
