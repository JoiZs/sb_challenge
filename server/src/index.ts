import "dotenv/config";
import "reflect-metadata";
import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServer } from "@apollo/server";
import { apolloSchema } from "./utils/apolloSchema";
import { PrismaClient } from "@prisma/client";
import { ApCtx } from "./context/apolloctx";

(async () => {
  const prisma = new PrismaClient();
  const server = new ApolloServer<ApCtx>({
    schema: await apolloSchema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: parseInt(process.env.PORT!) },
    context: async () => ({ prisma }),
  });

  console.log("Server UP! ", url);
})();
