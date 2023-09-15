import Code from './code';
import { EmojiProps } from './../components/Emoji';

type Language = {
  readonly code: Code,
  readonly display: string,
};

type Locale = Language & EmojiProps;

// TODO: Use Code enum for key
export type Locales = {
  readonly [key: string]: Locale
};

const LOCALE_EN: Locale = {
  code: Code.CODE_EN,
  display: 'english',
  emoji: '🇬🇧',
  label: 'flag: english',
};

const LOCALE_TH: Locale = {
  code: Code.CODE_TH,
  display: 'thai',
  emoji: '🇹🇭',
  label: 'flag: thai',
};

const locales: Locales = {
  [Code.CODE_EN]: LOCALE_EN,
  [Code.CODE_TH]: LOCALE_TH,
};

export default locales;
