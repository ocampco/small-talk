export type Locale = {
  readonly code: string,
  readonly display: string,
};

const LOCALE_ENGLISH: Locale = {
  code: 'en',
  display: 'english',
};

const LOCALE_THAI: Locale = {
  code: 'th',
  display: 'thai',
};

const LOCALE_SPANISH: Locale = {
  code: 'es',
  display: 'spanish',
};

export const LOCALE_DEFAULT: Locale = LOCALE_ENGLISH;
// TODO: URL Logic for not selected
export const LOCALE_NOT_SELECTED: Locale = {
  code: '',
  display: 'please select',
};

const locales: Locale[] = [
  LOCALE_ENGLISH,
  LOCALE_THAI,
  LOCALE_SPANISH,
];

export default locales;
