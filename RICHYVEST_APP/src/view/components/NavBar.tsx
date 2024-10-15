// src/components/NavBar.tsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const NavBar: React.FC = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 p-4 w-full z-50">
      <div className="container mx-auto flex justify-evenly">
        <div className='flex items-center space-x-4'>
          <Link to="/">
            <img src="/Logo.png" alt="logo" width="30px" />
          </Link>
          <Link to="/" className="text-white">
            Home
          </Link>
        </div>
        <div>
          {isAuthenticated ? (
            <button onClick={logout} className="text-white">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="text-white mr-4">
                Login
              </Link>
              <Link to="/register" className="text-white">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;