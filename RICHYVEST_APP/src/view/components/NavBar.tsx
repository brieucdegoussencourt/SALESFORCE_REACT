// src/components/NavBar.tsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const NavBar: React.FC = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="border-b-4 bg-cyan-100 border-cyan-400 p-4 w-full z-50">
      <div className="flex justify-center">
        <div className="flex justify-between items-center px-2 max-w-lg w-full">
          <Link
            to="/"
            className="bg-cyan-500 text-white font-light py-1 px-6 rounded hover:bg-cyan-600 transition-shadow shadow-md hover:shadow-lg"
          >
            Home
          </Link>
          {isAuthenticated ? (
            <button
              onClick={logout}
              className="bg-cyan-500 text-white font-light py-1 px-6 rounded hover:bg-cyan-600 transition-shadow shadow-md hover:shadow-lg"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-cyan-500 text-white font-light py-1 px-6 rounded hover:bg-cyan-600 transition-shadow shadow-md hover:shadow-lg"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-cyan-500 text-white font-light py-1 px-6 rounded hover:bg-cyan-600 transition-shadow shadow-md hover:shadow-lg"
              >
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
