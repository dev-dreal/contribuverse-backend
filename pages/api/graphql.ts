import { ApolloServer } from "@apollo/server";
import { typeDefs } from "@/graphql/schema";
import { resolvers } from "@/graphql/resolvers";
import prisma from "@/prisma/db";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextApiRequest, NextApiResponse } from "next";
import { Context } from "@/types";
import allowCors from "../../utils/cors";

const apolloServer = new ApolloServer<Context>({
  typeDefs,
  resolvers,
  introspection: true,
});
const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req: NextApiRequest, res: NextApiResponse) => ({
    req,
    res,
    prisma,
  }),
});

export default allowCors(handler);
