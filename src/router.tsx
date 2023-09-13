import { RouteObject, createBrowserRouter } from 'react-router-dom';
import App from './App';
import TranslateContainer from './components/TranslateContainer';
import { ROUTES_BASENAME } from './constants/config';

// TODO: Do I need to have this here?
type OptionsType = {
  basename?: string,
};

const routes: RouteObject[] = [{
  path: '/',
  element: <App />,
}, {
  path: '/translate',
  element: <TranslateContainer />,
}];

const options: OptionsType  = {
  basename: ROUTES_BASENAME,
};

const router = createBrowserRouter(routes, options);

export default router;
