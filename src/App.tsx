import { useSearchParams } from 'react-router-dom';
import LanguageContainer from './components/LanguageContainer';
import { SEARCH_PARAM_TRANSLATION } from './constants/config';

const App = () => {
  const [searchParams] = useSearchParams();
  const toCode: string | null = searchParams.get(SEARCH_PARAM_TRANSLATION);

  return (
    <>
      <h1>small talk translator</h1>
      <LanguageContainer toCode={toCode} />
    </>
  );
};

export default App;
