import Code from '../code';
import Category from '../category';
import { Phrases } from './phrases';

const PHRASE_BASIC: string[][] = [
  ['(masculine) sa-wat-dee krap', '(feminine) sa-wat-dee ka'],
  ['(masculine) sa-wat-dee krap', '(feminine) sa-wat-dee ka'],
  ['(masculine) kop kun krap', '(feminine) kop kun ka'],
  ['(masculine) chai krap', '(feminine) chai ka'],
  ['(masculine) chai mai krap', '(feminine) chai mai ka'],
  ['(masculine) kor toht krap', '(feminine) kor toht ka'],
  ['(masculine) kor toht krap', '(feminine) kor toht ka'],
];

const thai: Phrases = {
  [Code.CODE_TH]: {
    [Category.CATEGORY_BASIC]: PHRASE_BASIC,
  },
};

export default thai;
