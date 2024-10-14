// src/components/NavBar.tsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const NavBar: React.FC = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="bg-white p-4 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-evenly">
        <Link to="/" className="text-gray-800">
          Home
        </Link>
        <div>
          {isAuthenticated ? (
            <button onClick={logout} className="text-gray-800">
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="text-gray-800 mr-4">
                Login
              </Link>
              <Link to="/register" className="text-gray-800">
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