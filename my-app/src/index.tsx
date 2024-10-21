import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {ThemeProvider, createTheme} from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6933'
    },
    secondary: {
      main:'#00ff00'
    }
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);