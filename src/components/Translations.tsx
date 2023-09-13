import { useEffect, useState } from 'react';
import phrases, { Phrases, Phrase } from '../constants/phrases';
import { CODE_DEFAULT } from '../constants/config';
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
      { fromPhrases && fromPhrases.map((fromPhrase, index) => (
          <li className={styles.item} key={fromPhrase[0]}>
            <p className={styles.native}>
              {fromPhrase[0]}
            </p>
            { toPhrases && toPhrases[index].map(toPhrase => (
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
