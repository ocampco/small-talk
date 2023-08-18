import { Navigate, useParams } from 'react-router-dom';
import { LOCALE_NATIVE_DEFAULT } from './constants/config';

const App = () => {
  const { nativeLocale } = useParams();

  return (
    <>
      { !nativeLocale &&
          <Navigate to={LOCALE_NATIVE_DEFAULT} replace={true} />
      }
      <h1>small talk translator</h1>
    </>
  );
};

export default App;
