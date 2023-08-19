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


const localesArray: Locale[] = [LOCALE_ENGLISH, LOCALE_THAI];
const localesMap: Map<string | undefined, Locale> = new Map();

localesArray.map(
  (locale: Locale) => localesMap.set(locale.code, locale)
);

export const LOCALE_DEFAULT: Locale = LOCALE_ENGLISH;
export default localesMap;
