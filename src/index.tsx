import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import AppRouter from './AppRouter';
import GlobalStyle from './styled/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <GlobalStyle />
    <AppRouter />
  </>,
);

reportWebVitals();
