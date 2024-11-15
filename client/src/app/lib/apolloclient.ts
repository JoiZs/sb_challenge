import { HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";

const createApolloClient = () =>
  new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri:
        process.env.NODE_ENV == "production"
          ? "https://sbc.pyaesoneaung.com/api"
          : "http://localhost:4567",
    }),
  });

export default createApolloClient;
