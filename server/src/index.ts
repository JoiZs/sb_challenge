import "dotenv/config";
import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";
import http from "http";
import cors from "cors";
import express from "express";
import { apolloSchema } from "./utils/apolloSchema";
import { PrismaClient } from "@prisma/client";
import { ApCtx } from "./context/apolloctx";

(async () => {
  const app = express();
  const httpServer = http.createServer(app);
  const prisma = new PrismaClient();
  const server = new ApolloServer<ApCtx>({
    schema: await apolloSchema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use(
    "/",
    cors<cors.CorsRequest>({
      origin:
        process.env.NODE_ENV == "production"
          ? ["pyaesoneaung.com", "localhost"]
          : ["localhost"],
    }),
    express.json({ limit: "50mb" }),
    expressMiddleware(server, {
      context: async () => ({ prisma }),
    })
  );

  httpServer.listen({ port: process.env.PORT });

  console.log("Server UP! ", `http://localhost:${process.env.PORT}/`);
})();
