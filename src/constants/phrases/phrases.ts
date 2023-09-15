import Code from '../code';
import Category from '../category';
import english from './english';
import thai from './thai';

export type Phrase = {
  [value in Category]?: string[][]
};

export type Phrases = {
  [value in Code]?: Phrase
};

const phrases: Phrases = {
  ...english,
  ...thai,
};

export default phrases;
