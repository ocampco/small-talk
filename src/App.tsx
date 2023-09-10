import { useSearchParams } from 'react-router-dom';
import TranslationContainer from './components/TranslationContainer';
import getLocales from './components/getLocale';
import {
  Locale,
  LOCALE_DEFAULT,
  LOCALE_NOT_SELECTED,
} from './constants/locales';
import {
  SEARCH_PARAM_NATIVE,
  SEARCH_PARAM_TRANSLATION,
} from './constants/config';

type Param = string | null;

const App = () => {
  const [searchParams] = useSearchParams();
  const nativeParam: Param = searchParams.get(SEARCH_PARAM_NATIVE);
  const translationParam: Param = searchParams.get(SEARCH_PARAM_TRANSLATION);
  // TODO: Add better logic with routing
  const nativeLocale: Locale =
    getLocales(nativeParam) || LOCALE_DEFAULT;
  const translationLocale: Locale =
    getLocales(translationParam) || LOCALE_NOT_SELECTED;

  return (
    <>
      <h1>small talk translator</h1>
      <label>translate from:</label><span>{nativeLocale.display}</span>
      <label>translate to:</label><span>{translationLocale.display}</span>
      <TranslationContainer
        nativeLocaleCode={nativeLocale.code}
        translationLocaleCode={translationLocale.code}
      />
    </>
  );
};

export default App;
