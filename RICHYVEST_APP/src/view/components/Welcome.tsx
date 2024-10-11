// src/components/Welcome.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Welcome: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <p className="text-5xl text-cyan-400">RICHYVEST</p>
    <p className="text-2xl text-gray-800 mb-8">How rich could you be?</p>
    <div className="space-x-4">
      <Link to="/register" className="btn bg-cyan-400 text-white font-bold py-2 px-4 rounded mt-8">
        Register
      </Link>
      <Link to="/login" className="btn bg-cyan-400 text-white font-bold py-2 px-4 rounded mt-8">
        Login
      </Link>
    </div>
  </div>
);

export default Welcome;