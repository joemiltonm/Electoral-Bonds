import React from 'react';
import ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';

const theme = createTheme({
  /** Put your mantine theme override here */
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);