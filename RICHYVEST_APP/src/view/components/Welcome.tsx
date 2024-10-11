// src/components/Welcome.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Welcome: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-4xl mb-8">Welcome to the App</h1>
    <div className="space-x-4">
      <Link to="/register" className="btn">
        Register
      </Link>
      <Link to="/login" className="btn">
        Login
      </Link>
    </div>
  </div>
);

export default Welcome;