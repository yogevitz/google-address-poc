/**
 Address fields by letters
 Based on: https://github.com/google/libaddressinput/wiki/AddressValidationMetadata
 N – Name
 O – Organisation
 A – Street Address Line(s)
 D – Dependent locality (may be an inner-city district or a suburb)
 C – City or Locality
 S – Administrative area such as a state, province, island etc
 Z – Zip or postal code
 X – Sorting code
 */

export type CodeLetters = 'N' | 'O' | 'A' | 'D' | 'C' | 'S' | 'Z' | 'X';

export const ADDRESS_FIELDS = {
  NAME: 'NAME',
  ORGANIZATION: 'ORGANIZATION',
  STREET_ADDRESS_LINES: 'STREET_ADDRESS_LINES',
  DEPENDENT_LOCALITY: 'DEPENDENT_LOCALITY',
  CITY_OR_LOCALITY: 'CITY_OR_LOCALITY',
  ADMINISTRATIVE_AREA: 'ADMINISTRATIVE_AREA',
  ZIP_CODE: 'ZIP_CODE',
  SORTING_CODE: 'SORTING_CODE',
};

export const ADDRESS_LETTERS: Record<CodeLetters, string> = {
  N: ADDRESS_FIELDS.NAME,
  O: ADDRESS_FIELDS.ORGANIZATION,
  A: ADDRESS_FIELDS.STREET_ADDRESS_LINES,
  D: ADDRESS_FIELDS.DEPENDENT_LOCALITY,
  C: ADDRESS_FIELDS.CITY_OR_LOCALITY,
  S: ADDRESS_FIELDS.ADMINISTRATIVE_AREA,
  Z: ADDRESS_FIELDS.ZIP_CODE,
  X: ADDRESS_FIELDS.SORTING_CODE,
};
