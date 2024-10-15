import { ApolloClient, InMemoryCache } from "@apollo/client";

const RICK_ANd_MORTY_API_URL = "https://rickandmortyapi.com/graphql";

const client = new ApolloClient({
  uri: RICK_ANd_MORTY_API_URL,
  cache: new InMemoryCache(),
});

export default client;
