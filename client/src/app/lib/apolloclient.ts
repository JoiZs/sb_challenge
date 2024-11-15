import { HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";

const createApolloClient = () =>
  new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "http://localhost:4567",
    }),
  });

export default createApolloClient;
