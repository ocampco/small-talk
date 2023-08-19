import { Navigate, useParams } from 'react-router-dom';
import locales, { Locale, LOCALE_DEFAULT } from './constants/locales';

const App = () => {
  const { nativePath } = useParams();
  // TODO: Make distinction between not found and not given
  const nativeLocale: Locale = locales.get(nativePath) || LOCALE_DEFAULT;

  return (
    <>
      { !nativePath &&
        <Navigate to={nativeLocale.code} replace={true} />
      }
      <h1>small talk translator</h1>
      <label>translate from:</label><span>{nativeLocale.display}</span>
    </>
  );
};

export default App;
