import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4567/",
  documents: "./src/graphql/schema/**/*.graphql",
  generates: {
    "src/graphql/gql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        reactApolloVersion: 3,
      },
    },
  },
};

export default config;
