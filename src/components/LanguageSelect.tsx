import { ChangeEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Emoji from './Emoji';
import { SEARCH_PARAM_TRANSLATION } from '../constants/config';
import locales, { Locales } from '../constants/locales';
import Code from '../constants/code';
import styles from './LanguageSelect.module.css';

type LanguageSelectProps = {
  readonly options?: Locales,
  readonly toCode: string | null;
};

// TODO: Default selection
// TODO: Disable EN option
const LanguageSelect = ({
  options = locales,
  toCode,
}: LanguageSelectProps) => {
  const [selectedValue, setSelectedValue] = useState<Code | undefined>();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // @ts-ignore
    if (toCode in options) setSelectedValue(toCode);
  }, [toCode, options]);

  const handleChange = (event: ChangeEvent) => {
    // @ts-ignore
    const selectedToCode = event.target.value;

    if (selectedToCode in options) {
      setSelectedValue(selectedToCode);
      searchParams.set(SEARCH_PARAM_TRANSLATION, selectedToCode);
      setSearchParams(searchParams);
    };
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        <Emoji emoji='💬' label='speech balloon' />
        small talk
      </h2>
      <select
        value={selectedValue}
        onChange={handleChange}
        className={styles.select}
      >
        { Object
          .values(options)
          .map(({ code, display, emoji }) => (
            <option value={code} key={code}>
              {emoji} {display}
            </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelect;
