// src/components/NavBar.tsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const NavBar: React.FC = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="bg-cyan-900 border-cyan-400 p-4 w-full z-50">
      <div className="flex justify-center">
        <div className="flex justify-between items-center px-2 max-w-lg w-full">
          <Link
            to={isAuthenticated ? "/app" : "/"}
            className="bg-cyan-900 text-white font-light py-1 px-5 rounded hover:bg-cyan-400 transition-shadow shadow-md hover:shadow-lg"
          >
            HOME
          </Link>
          {isAuthenticated ? (
            <button
              onClick={logout}
              className="bg-cyan-900 text-white font-light py-1 px-5 rounded hover:bg-cyan-400 transition-shadow shadow-md hover:shadow-lg"
            >
              LOGOUT
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-cyan-900 text-white font-light py-1 px-5 rounded hover:bg-cyan-400 transition-shadow shadow-md hover:shadow-lg"
              >
                LOGIN
              </Link>
              <Link
                to="/register"
                className="bg-cyan-900 text-white font-light py-1 px-5 rounded hover:bg-cyan-400 transition-shadow shadow-md hover:shadow-lg"
              >
                REGISTER
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
