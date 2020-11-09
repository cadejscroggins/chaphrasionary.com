import AuikApp from 'a-uik/c/AuikApp';
import React from 'react';

const App = ({ Component, pageProps }) => (
  <AuikApp
    fonts="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Esteban:wght@400&display=swap"
    seo={{
      canonical: 'https://chaphrasionary.com',
      description:
        'Chaphrasionary is a thrilling mash-up of Charades, Catchphrase and Pictionary. Winning will require a healthy combination of courage, wit & creativity.',
      openGraph: {
        locale: 'en_US',
        site_name: 'Chaphrasionary',
        type: 'website',
        url: 'https://chaphrasionary.com',
      },
      title: 'Chaphrasionary',
      titleTemplate: '%s - Chaphrasionary',
      twitter: {
        cardType: 'summary',
        handle: '@cadejscroggins',
        site: '@cadejscroggins',
      },
    }}
    theme={{
      config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
      },
      fontSizes: [
        '0.512rem',
        '0.64rem',
        '0.8rem',
        '1rem',
        '1.25rem',
        '1.563rem',
        '1.953rem',
        '2.441rem',
        '3.052rem',
      ],
      fontWeights: {
        black: 900,
        bold: 900,
        extrabold: 900,
        hairline: 400,
        light: 400,
        medium: 400,
        normal: 400,
        semibold: 900,
        thin: 400,
      },
      fonts: {
        body: `Esteban, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
        heading: `Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      },
      styles: {
        global: {
          html: {
            fontFamily: 'body',
            fontSize: ['4vw', '3.75vw', '2.5vw', '20px'],
          },
        },
      },
    }}
  >
    <Component {...pageProps} />
  </AuikApp>
);

export default App;
