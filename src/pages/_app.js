/* eslint-disable no-useless-catch */
import App from 'next/app';
import Head from 'next/head';
import Cookies from 'js-cookie';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
import { IconoirProvider } from 'iconoir-react';
import { DM_Sans as DMSans } from 'next/font/google';
import { Notifications } from '@mantine/notifications';

import store from '@/state/store';
import themes from '@/config/styles/themes';
import { Layout } from '@/shared/components/Layout';
import { PageLoadingBar } from '@/features/pageLoadingBar';
import { ErrorBoundaryAppRoot } from '@/shared/components/ErrorBoundary';
import { authenticateUserApi } from '@/shared/services/authenticateUserApi';
import { InitStateProvider } from '@/shared/providers/InitStateProvider';
import '@/styles/globals.css';

const dmSans = DMSans({
  subsets: ['latin'],
  variable: '--dm-sans',
  style: ['normal', 'italic'],
  weight: ['400', '500', '700'],
  fallback: [
    'Frutiger',
    'Frutiger Linotype',
    'Univers',
    'Calibri',
    'Gill Sans',
    'Gill Sans MT',
    'Myriad Pro',
    'Myriad',
    'DejaVu Sans Condensed',
    'Liberation Sans',
    'Nimbus Sans L',
    'Tahoma',
    'Geneva',
    'Helvetica Neue',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
});

function AppRoot({ Component, pageProps, userData, currPath }) {
  return (
    <>
      <Head>
        <title>Hamzy Freelance Marketplace</title>
        <meta
          name="viewport"
          content="minimum-scalej=1, initial-scale=1, width=device-width"
        />
      </Head>

      <IconoirProvider iconProps={{ color: '#1A1A1A', strokeWidth: 2 }}>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={themes}>
          <Provider store={store}>
            <ErrorBoundaryAppRoot>
              <main className={dmSans.variable}>
                <PageLoadingBar />
                <Notifications position="top-center" zIndex={2077} limit={5} />
                <InitStateProvider userData={userData} />
                <Layout pagePath={currPath}>
                  <Component {...pageProps} />
                </Layout>
              </main>
            </ErrorBoundaryAppRoot>
          </Provider>
        </MantineProvider>
      </IconoirProvider>
    </>
  );
}

/**
 *
 * `AppRoot.getInitialProps` has disabled Automatic Static Optimization for all
 *  pages, Export `getStaticProps` function in pages that neeed Static Generation.
 *
 * For the initial page load, `getInitialProps` will run on the server only.
 *
 * `getInitialProps` will then also run on the client when navigating to a
 * different route with the `next/link` component or by using `next/router`.
 *
 * Navigating to a page with `getServerSideProps` will cause `getInitialProps`
 * to also run on both the server-side and again on the client-side during page
 * transitions
 *
 * */

AppRoot.getInitialProps = async (appRootProps) => {
  // req: The HTTP request object (only available on the server).
  // res: The HTTP response object (only available on the server).
  const { ctx, router } = appRootProps;

  const currPath = router.pathname;
  const appProps = await App.getInitialProps(appRootProps);

  let sessionToken = null;

  if (typeof window !== 'undefined') {
    // Fetch sessionToken on the client side
    sessionToken = Cookies.get('sessionToken');
  } else {
    // Fetch sessionToken on the server side
    const { cookies } = ctx.req;
    sessionToken = cookies.sessionToken || '';
  }

  let userData = [];

  if (sessionToken) {
    try {
      // Perform initial state initialization
      const response = await authenticateUserApi(sessionToken);
      userData = response.userData;
    } catch (error) {
      throw error;
    }
  }

  return { ...appProps, userData, currPath };
};

export default AppRoot;
