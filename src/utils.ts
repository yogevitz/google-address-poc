import {
  ADDRESS_CODE_LETTERS,
  ADDRESS_LETTERS,
  AddressCodeLetters,
} from './types';

export const strToAddressFields = (str: string) =>
  Array.prototype.map.call(str, codeLetterToAddressField);

export const fmtToAddressFields = (fmt: string) =>
  fmt
    .split('%')
    .filter(
      (subStr) =>
        subStr.length &&
        ADDRESS_CODE_LETTERS.includes(subStr[0]) &&
        (subStr.length === 1 || !subStr[1].match(/[a-zA-Z0-9]/g)),
    )
    .map((subStr) => (subStr.length === 1 ? subStr : subStr[0]))
    .map((char) => codeLetterToAddressField(char as AddressCodeLetters));

export const mapNames = (subNames: string) => subNames.split('~');

const codeLetterToAddressField = (letter: AddressCodeLetters) =>
  ADDRESS_LETTERS[letter];
