import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import AppRouter from './AppRouter';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<AppRouter />);

reportWebVitals();
