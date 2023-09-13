import { useSearchParams } from 'react-router-dom';
import LanguageSelect from './LanguageSelect';
import Translations from './Translations';
import { SEARCH_PARAM_TRANSLATION } from './../constants/config';

const TranslateContainer = () => {
  const [searchParams] = useSearchParams();
  const toCode: string | null = searchParams.get(SEARCH_PARAM_TRANSLATION);

  return (
    <>
      <LanguageSelect toCode={toCode} />
      { toCode && <Translations toCode={toCode} />}
    </>
  );
};

export default TranslateContainer;
