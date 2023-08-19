export type Locale = {
  readonly code: string;
  readonly display: string;
};

const LOCALE_ENGLISH: Locale = {
  code: 'en',
  display: 'English',
};

const LOCALE_THAI: Locale = {
  code: 'th',
  display: 'Thai',
};

// TODO: Refactor to be smarter?
const locales: Record<string, Locale> = {
  [LOCALE_ENGLISH.code]: LOCALE_ENGLISH,
  [LOCALE_THAI.code]: LOCALE_THAI,
};

export default locales;
