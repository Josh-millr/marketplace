import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { DM_Sans as DMSans } from 'next/font/google';

import '@/styles/globals.css';

const dmSans = DMSans({
  style: ['normal', 'italic'],
  subsets: ['latin'],
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

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
        }}
      >
        <main className={dmSans.className}>
          <Component {...pageProps} />
        </main>
      </MantineProvider>
    </>
  );
}
