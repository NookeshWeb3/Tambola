import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import './index.css';

const socket = io('http://localhost:3001');

function App() {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    socket.on('connect', () => {
      setConnected(true);
      console.log('Connected to server');
    });

    socket.on('disconnect', () => {
      setConnected(false);
      console.log('Disconnected from server');
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Tambola</h1>
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className={`w-3 h-3 rounded-full ${connected ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
          <p className="text-gray-600 font-medium">
            {connected ? 'Connected to Server' : 'Connecting to Server...'}
          </p>
        </div>
        <p className="text-gray-500">Welcome to the Real-time Multiplayer Tambola App!</p>
      </div>
    </div>
  );
}

export default App;
