// src/components/Welcome.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';

const Welcome: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <div className='mb-12'><Title /> </div>
    <div className="space-x-10">
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