import { AppProps } from 'next/app';
import withApollo from 'next-with-apollo';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import Page from '../components/page/Page';

interface WithApolloProps extends AppProps {
  apollo: ApolloClient<Cache>;
}

const App = ({ Component, pageProps, apollo }: WithApolloProps) => (
  <ApolloProvider client={apollo}>
    <Page>
      <Component {...pageProps} />
    </Page>
  </ApolloProvider>
);

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      uri: process.env.NEXT_PUBLIC_API_URL,
      cache: new InMemoryCache().restore(initialState || {}),
    })
)(App);
