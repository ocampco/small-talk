import { Navigate, useParams } from 'react-router-dom';
import TranslationContainer from './components/TranslationContainer';
import locales, {
  Locale,
  LOCALE_DEFAULT,
  LOCALE_NOT_SELECTED,
} from './constants/locales';

type URLParams = {
  readonly nativePath?: string,
  readonly translationPath?: string,
};

const App = () => {
  const { nativePath, translationPath }: URLParams = useParams();
  // TODO: Make distinction between not found and not given
  const nativeLocale: Locale = locales.get(nativePath)
    || LOCALE_DEFAULT;
  const translationLocale: Locale = locales.get(translationPath)
    || LOCALE_NOT_SELECTED;

  return (
    <>
      { !nativePath &&
        <Navigate to={nativeLocale.code} replace={true} />
      }
      <h1>small talk translator</h1>
      <label>translate from:</label><span>{nativeLocale.display}</span>
      <label>translate to:</label><span>{translationLocale.display}</span>
      <TranslationContainer />
    </>
  );
};

export default App;
