import Code from './code';

type Locale = {
  readonly code: Code,
  readonly display: string,
};

// TODO: Use Code enum for key
export type Locales = {
  readonly [key: string]: Locale
};

const LOCALE_EN: Locale = {
  code: Code.CODE_EN,
  display: 'english',
};

const LOCALE_TH: Locale = {
  code: Code.CODE_TH,
  display: 'thai',
};

const locales: Locales = {
  [Code.CODE_EN]: LOCALE_EN,
  [Code.CODE_TH]: LOCALE_TH,
};

export default locales;
