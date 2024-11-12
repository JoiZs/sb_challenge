import { buildSchema } from "type-graphql";
import { resolvers } from "../model/generated/type-graphql";

export const apolloSchema = buildSchema({
  resolvers,
  validate: false,
});
