import "../styles/globals.css";
import Layout from "../components/Layout";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import {onError} from "@apollo/client/link/error";

const errorLink = onError (( { graphqlErrors, networkError } ) => {
  if (graphqlErrors) {
    graphqlErrors.map (( { message, location, path } ) => {
      alert (`Graphql error ${message}`);
    });
  }
});

const link = from ([
  errorLink,
  new HttpLink ({ uri: "http://localhost:6969/graphql" }),
]);

const client = new ApolloClient ({
  cache: new InMemoryCache (),
  link: link,
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
