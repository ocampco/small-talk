import { ChangeEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEARCH_PARAM_TRANSLATION } from '../constants/config';
import locales, { Locales } from '../constants/locales';

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
  const [selectedValue, setSelectedValue] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // @ts-ignore
    if (toCode in options) {
      // @ts-ignore
      setSelectedValue(toCode);
    };
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
    <select value={selectedValue} onChange={handleChange}>
      { Object
        .values(options)
        .map(({ code, display }) => (
          <option value={code} key={code}>
            {display}
          </option>
      ))}
    </select>
  )
};

export default LanguageSelect;
