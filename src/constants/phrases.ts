import Code from './code';

// TODO: Use Code enum for key
export type Phrase = string[][];
export type Phrases = {
  readonly [key: string]: Phrase
};

const PHRASE_EN: Phrase = [
  ['hello'],
  ['thank you'],
  ['yes'],
  ['no'],
  ['sorry'],
  ['excuse me'],
];

const PHRASE_TH: Phrase = [
  ['(masculine) sa-wat-dee krap', '(feminine) sa-wat-dee ka'],
  ['(masculine) kop kun krap', '(feminine) kop kun ka'],
  ['(masculine) chai krap', '(feminine) chai ka'],
  ['(masculine) chai mai krap', '(feminine) chai mai ka'],
  ['(masculine) kor toht krap', '(feminine) kor toht ka'],
  ['(masculine) kor toht krap', '(feminine) kor toht ka'],
];

const phrases = {
  [Code.CODE_EN]: PHRASE_EN,
  [Code.CODE_TH]: PHRASE_TH,
};

export default phrases;
