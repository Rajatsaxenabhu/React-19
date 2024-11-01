import express from 'express';
import { connectToDatabase } from './db/postgre';
import cookieParser from 'cookie-parser';
import authroutes from './routes/auth.routes';
import cors from 'cors';
import setupSocket from './utils/socket';
import http from 'http';

const app = express();
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,POST',
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());

const port = 3000;

// Basic route

// Authentication routes
app.use('/auth', authroutes);

// Create an HTTP server and setup Socket.IO
const server = http.createServer(app);
setupSocket(server); // No need for `await` here since `setupSocket` is synchronous

// Start the server
server.listen(port, () => {
  connectToDatabase();
  console.log(`Server is listening on port ${port}`);
});
