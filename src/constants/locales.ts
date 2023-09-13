import * as codes from './codes';

export type Locale = {
  readonly code: string,
  readonly display: string,
};

export type Locales = {
  readonly [key: string]: Locale
};

const LOCALE_EN: Locale = {
  code: codes.CODE_EN,
  display: 'english',
};

const LOCALE_TH: Locale = {
  code: codes.CODE_TH,
  display: 'thai',
};

const locales: Locales = {
  [codes.CODE_EN]: LOCALE_EN,
  [codes.CODE_TH]: LOCALE_TH,
};

export default locales;
