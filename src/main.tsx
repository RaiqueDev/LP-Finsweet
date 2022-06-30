import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from "react-router-dom";
import * as ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import { theme } from './styles/theme/styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
