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

export const ADDRESS_CODE_LETTERS = ['N', 'O', 'A', 'D', 'C', 'S', 'Z', 'X'];
export type AddressCodeLetters = 'N' | 'O' | 'A' | 'D' | 'C' | 'S' | 'Z' | 'X';

export const ADDRESS_FIELDS = {
  NAME: 'NAME',
  ORGANIZATION: 'ORGANIZATION',
  STREET_ADDRESS_LINES: 'STREET_ADDRESS_LINES',
  SUB_LOCALITY: 'SUB_LOCALITY',
  LOCALITY: 'LOCALITY',
  ADMINISTRATIVE_AREA: 'ADMINISTRATIVE_AREA',
  POSTAL_CODE: 'POSTAL_CODE',
  SORTING_CODE: 'SORTING_CODE',
};

export const ADDRESS_LETTERS: Record<AddressCodeLetters, string> = {
  N: ADDRESS_FIELDS.NAME,
  O: ADDRESS_FIELDS.ORGANIZATION,
  A: ADDRESS_FIELDS.STREET_ADDRESS_LINES,
  D: ADDRESS_FIELDS.SUB_LOCALITY,
  C: ADDRESS_FIELDS.LOCALITY,
  S: ADDRESS_FIELDS.ADMINISTRATIVE_AREA,
  Z: ADDRESS_FIELDS.POSTAL_CODE,
  X: ADDRESS_FIELDS.SORTING_CODE,
};

export const LOCALITY: Record<string, string> = {
  TH: 'amphoe/khet', // Thailand
  HK: 'district', // Hong Kong
  TR: 'district', // Turkey
  NO: 'post-town', // Norway
  SE: 'post-town', // Sweden
  GB: 'post-town', // United Kingdom
  OTHER: 'locality', // Other
};

export const SUB_LOCALITY: Record<string, string> = {
  KR: 'district', // South Korea
  NG: 'local-government-area', // Nigeria
  BR: 'neighborhood', // Brazil
  MX: 'neighborhood', // Mexico
  NZ: 'suburb', // New Zealand
  PH: 'suburb', // Philippines
  ZA: 'suburb', // South Africa
  TH: 'tambon/khwaeng', // Thailand
  IE: 'townland', // Ireland
  MY: 'village/township', // Malaysia
  OTHER: 'sub-locality', // Other
};
