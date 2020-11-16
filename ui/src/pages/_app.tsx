import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { FunctionComponent } from 'react';
import { EuiErrorBoundary } from '@elastic/eui';

import { AuthProvider } from 'src/components/auth/AuthContext';

const EuiApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossOrigin="*"
      />
      <title>Airzoom UI</title>
    </Head>
      <AuthProvider>
        <EuiErrorBoundary>
          <Component {...pageProps} />
        </EuiErrorBoundary>
      </AuthProvider>
  </>
);

export default EuiApp;
