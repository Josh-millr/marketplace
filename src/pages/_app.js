/* eslint-disable no-useless-catch */
import App from 'next/app';
import Head from 'next/head';
import { parse } from 'cookie';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
import { IconoirProvider } from 'iconoir-react';
import { DM_Sans as DMSans } from 'next/font/google';

import store from '@/state/store';
import themes from '@/config/styles/themes';
import { PageLoadingBar } from '@/features/pageLoadingBar';
import { ErrorBoundaryAppRoot } from '@/shared/components/ErrorBoundary';
import { InitUserStateProvider } from '@/shared/providers/InitUserStateProvider';
import { authenticateUserApi } from '@/shared/services/authenticateUserApi';
import '@/styles/globals.css';

const dmSans = DMSans({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500', '700'],
});

function AppRoot({ Component, pageProps, userData }) {
  console.log('User data returned:', userData);

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
              <main className={dmSans.className}>
                <PageLoadingBar />
                <InitUserStateProvider initialState={userData} />
                <Component {...pageProps} />
              </main>
            </ErrorBoundaryAppRoot>
          </Provider>
        </MantineProvider>
      </IconoirProvider>
    </>
  );
}

AppRoot.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  // Perform state initialization
  const cookies = await parse(appContext.req?.headers?.cookie || '');
  const sessionToken = cookies?.sessionToken || '';

  try {
    const response = await authenticateUserApi(sessionToken);
    const { userData } = response;

    return { ...appProps, userData };
  } catch (error) {
    throw error;
  }
};

export default AppRoot;
