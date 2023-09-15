import { useEffect, useState } from 'react';
import phrases, { Phrases, Phrase } from '../constants/phrases/phrases';
import { CODE_DEFAULT } from '../constants/config';
import Category from '../constants/category';
import styles from './Translations.module.css';

type TranslationsProps = {
  readonly toCode: string | null,
  readonly phraseList?: Phrases,
};

const Translations = ({
  toCode,
  phraseList = phrases,
}: TranslationsProps) => {
  const [toPhrases, setToPhrases] = useState<Phrase | undefined>();
  // @ts-ignore
  const fromPhrases: Phrase = phraseList[CODE_DEFAULT];

  useEffect(() => {
    const setPhrases = () => {
      // @ts-ignore
      if (toCode in phraseList) setToPhrases(phraseList[toCode])
    };

    if (toCode) setPhrases();
  }, [toCode, phraseList]);

  // TODO: Refactor loop to be way less confusing
  return (
    <ul className={styles.list}>
      {/* @ts-ignore */}
      { fromPhrases && fromPhrases[Category.CATEGORY_BASIC]
          .map((fromPhrase, index) => (
            <li className={styles.item} key={fromPhrase[0]}>
              <p className={styles.native}>
                {fromPhrase[0]}
              </p>
              {/* @ts-ignore */}
              { toPhrases && toPhrases[Category.CATEGORY_BASIC][index].map(toPhrase => (
                  <p className={styles.translation} key={toPhrase}>
                    {toPhrase}
                  </p>
              ))}
            </li>
      ))}
    </ul>
  )
};

export default Translations
