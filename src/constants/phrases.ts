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
  ['sa-wat-dee krap', 'sa-wat-dee ka'],
  ['kop kun krap', 'kop kun ka'],
  ['chai krap', 'chai ka'],
  ['chai mai krap', 'chai mai ka'],
  ['kor toht krap', 'kor toht ka'],
  ['kor toht krap', 'kor toht ka'],
];

const phrases = {
  [Code.CODE_EN]: PHRASE_EN,
  [Code.CODE_TH]: PHRASE_TH,
};

export default phrases;
