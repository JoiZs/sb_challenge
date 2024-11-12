import { BaseContext } from "@apollo/server";
import { PrismaClient } from "@prisma/client";

export type ApCtx = {
  prisma: PrismaClient;
};
