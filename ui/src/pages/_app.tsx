import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { FunctionComponent } from 'react';
import { EuiErrorBoundary } from '@elastic/eui';

import Chrome from '../components/chrome';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

require('dotenv').config()

const secret = process.env.SECRET

const client = new ApolloClient({
  uri: 'https://azreal-hasura.hasura.app/v1/graphql?',
  headers: {
    'x-hasura-admin-secret': secret,
    'content-type': 'application/json'
  }
});

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
    <ApolloProvider client={client}>
      <Chrome>
        <EuiErrorBoundary>
          <Component {...pageProps} />
        </EuiErrorBoundary>
      </Chrome>
    </ApolloProvider>
  </>
);

export default EuiApp;
