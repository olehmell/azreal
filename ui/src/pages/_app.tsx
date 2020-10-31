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
  uri: 'https://sterling-piranha-97.hasura.app/v1/graphql?',
  headers: {
    'x-hasura-admin-secret': secret,
    'content-type': 'application/json'
  }
});

const EuiApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      {/* You can override this in other pages - see page-2.tsx for an example */}
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
