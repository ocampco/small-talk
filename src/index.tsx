import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import router from './router';
import './styles/index.css';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
);
