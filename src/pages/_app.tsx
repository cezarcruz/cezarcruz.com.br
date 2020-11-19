import React from 'react';
import { AppProps } from 'next/app';

import GlobalStyle from '../styles/globals';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import Header from '../components/Header';

const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp;
