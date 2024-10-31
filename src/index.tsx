import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import AppRouter from './AppRouter';
import GlobalStyle from './styled/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styled/theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <AppRouter />
  </ThemeProvider>,
);

reportWebVitals();
