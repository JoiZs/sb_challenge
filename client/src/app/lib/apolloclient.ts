import { HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";

const createApolloClient = () =>
  new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "https://sbc.pyaesoneaung.com/api",
    }),
  });

export default createApolloClient;
