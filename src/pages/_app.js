import Head from 'next/head';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
import { DM_Sans as DMSans } from 'next/font/google';

import themes from '@/config/styles/themes';
import store from '@/state/store';
import '@/styles/globals.css';

const dmSans = DMSans({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500', '700'],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hamzy Freelance Marketplace</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider withGlobalStyles withNormalizeCSS theme={themes}>
        <Provider store={store}>
          <main className={dmSans.className}>
            <Component {...pageProps} />
          </main>
        </Provider>
      </MantineProvider>
    </>
  );
}
