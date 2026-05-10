import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import ScrollToTop from './utils/ScrollToTop';

import './index.css';
import Route from './Root.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Route />
    </BrowserRouter>
    ,
  </StrictMode>,
);
