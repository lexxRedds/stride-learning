import 'dotenv/config';
// require('dotenv').config(); // Add this line at the very top
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { PrismaClient } from '@prisma/client';
import { startApolloServer } from './graphql/apollo';
import { errorHandler } from './utils/errorHandler';
import userRoutes from './routes/userRoutes';

if (!process.env.CORS_ORIGIN) {
  throw new Error('CORS_ORIGIN environment variable is not set');
}

const app = express();

// Start the Prisma Client for RESTFull operations on PostgreSQL
export const prisma = new PrismaClient();

// Middleware
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// RESTFull API Routes
app.use('/api/users', userRoutes);

// GraphQL API Routes
const PORT = process.env.PORT || 4000;

// Start Apollo Server and then start the Express app
startApolloServer(app).then(() => {
  const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/graphql`);
  });

  // Soft shutdown
  process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    server.close(() => {
      console.log('HTTP server closed');
    });
  });
});

// Error handling middleware
app.use(errorHandler);

// Test Prisma connection (optional)
prisma.$connect()
  .then(() => console.log('Connected to PostgreSQL via Prisma'))
  .catch((error: any) => console.error('Failed to connect to PostgreSQL:', error));

export default app;