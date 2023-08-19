import { Navigate, useParams } from 'react-router-dom';
import locales, {
  Locale,
  LOCALE_DEFAULT,
  LOCALE_NOT_SELECTED,
} from './constants/locales';

const App = () => {
  const { nativePath, translationPath } = useParams();
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
    </>
  );
};

export default App;
