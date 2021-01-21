import AuikApp from 'a-uik/c/AuikApp';
import React from 'react';
import seo from '../seo';
import theme from '../theme';

const App = ({ Component, pageProps }) => (
  <AuikApp
    fonts="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Esteban:wght@400&display=swap"
    seo={seo}
    theme={theme}
  >
    <Component {...pageProps} />
  </AuikApp>
);

export default App;
