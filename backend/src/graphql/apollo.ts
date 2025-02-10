import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import bodyParser from 'body-parser';
import dynamoDB from '../services/dynamo';
import typeDefs from './schemas';
import resolvers from './resolvers';

interface ServerContext {
  token?: string;
  dynamo: typeof dynamoDB;
}

export async function startApolloServer(app: express.Application) {
  const server = new ApolloServer<ServerContext>({
    typeDefs,
    resolvers,
  });

  try {
    await server.start();

    app.use(
      '/graphql',
      cors<cors.CorsRequest>(),
      express.json(),
    );
  } catch (error) {
    console.error("Error starting Apollo Server:", error);
    throw error;
  }
};