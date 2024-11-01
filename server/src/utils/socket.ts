// src/utils/socket.ts
import { Server } from 'socket.io';
import http from 'http';

const setupSocket = async (server: http.Server): Promise<void> => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
    },
  });

  io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Handle incoming messages from clients
    socket.on('message', (message) => {
      console.log(`Message from ${socket.id}: ${message}`);
      io.emit('message', message); // Broadcast to all connected clients
    });

    // Handle disconnect event
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
};

export default setupSocket;
