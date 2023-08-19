import { Navigate, useParams } from 'react-router-dom';
import locales, { Locale } from './constants/locales';
import { LOCALE_NATIVE_DEFAULT } from './constants/config';

const App = () => {
  // TODO: Add type
  const { nativeLocale } = useParams();
  const defaultLocale: Locale = locales[LOCALE_NATIVE_DEFAULT];

  return (
    <>
      { !nativeLocale &&
        <Navigate to={defaultLocale.code} replace={true} />
      }
      <h1>small talk translator</h1>
    </>
  );
};

export default App;
