type NaturalGenderPhrases = String[];
type GenderPhrases = String[][];
type Phrases = NaturalGenderPhrases | GenderPhrases;

const PHRASES_EN: Phrases = [
  'hello',
  'thank you',
  'yes',
  'no',
  'sorry',
  'excuse me',
];

const PHRASES_TH: Phrases = [
  ['sa-wat-dee krap','sa-wat-dee ka'],
  ['khap khun krap','khap khun ka'],
  ['chai krap','chai ka'],
  ['chai mai krap','chai mai ka'],
  ['kor toht krap', 'kor toht ka'],
  ['kor toht krap', 'kor toht ka'],
];

const phrases = [
  PHRASES_EN,
  PHRASES_TH,
];

export default phrases;
