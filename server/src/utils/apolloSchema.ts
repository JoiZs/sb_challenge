import { buildSchema } from "type-graphql";
import { resolvers } from "@generated/type-graphql";

export const apolloSchema = buildSchema({
  resolvers,
  validate: false,
});
