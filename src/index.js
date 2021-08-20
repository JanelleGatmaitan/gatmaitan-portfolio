import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { ChakraProvider } from "@chakra-ui/react"
import theme from './themes';

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
