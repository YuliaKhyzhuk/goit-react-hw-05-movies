import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';

import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primaryBlack: '#2a2a2a',
    secondaryWhite: '#ffffff',
    primaryAccent: '#004c4c',
    secondaryAccent: '#008080',
    backgroundPrimary: '#b2d8d8',
    backgroundSecondary: '#006666',
    middleAccent: '#66b2b2',
  },
  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
  borderRadius: {
    sm: '4px',
    md: '5px',
    circle: '50%',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <BrowserRouter basename="/goit-react-hw-05-movies">
    <App />
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
