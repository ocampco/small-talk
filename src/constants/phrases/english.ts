import Code from '../code';
import Category from '../category';
import { Phrases } from './phrases';

const PHRASE_BASIC: string[][] = [
  ['hello'],
  ['goodbye'],
  ['thank you'],
  ['yes'],
  ['no'],
  ['sorry'],
  ['excuse me'],
];

const english: Phrases = {
  [Code.CODE_EN]: {
    [Category.CATEGORY_BASIC]: PHRASE_BASIC,
  },
};

export default english;
