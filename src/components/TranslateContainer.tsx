import { useSearchParams } from 'react-router-dom';
import LanguageSelect from './LanguageSelect';
import { SEARCH_PARAM_TRANSLATION } from './../constants/config';

const TranslateContainer = () => {
  const [searchParams] = useSearchParams();
  const toCode: string | null = searchParams.get(SEARCH_PARAM_TRANSLATION);

  return (
    <>
      <LanguageSelect toCode={toCode} />
    </>
  );
};

export default TranslateContainer;
