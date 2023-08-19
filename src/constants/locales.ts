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

export const LOCALE_DEFAULT: Locale = LOCALE_ENGLISH;
// TODO: URL Logic for not selected
export const LOCALE_NOT_SELECTED: Locale = {
  code: '',
  display: 'please select',
}

const localesArray: Locale[] = [LOCALE_ENGLISH, LOCALE_THAI];
const localesMap: Map<string | undefined, Locale> = new Map();

localesArray.map(
  (locale: Locale) => localesMap.set(locale.code, locale)
);

export default localesMap;
