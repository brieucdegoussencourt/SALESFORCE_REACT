// src/components/NavBar.tsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const NavBar: React.FC = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="bg-cyan-700 p-2 w-full z-50">
      <div className="flex justify-center">
        <div className="flex justify-between items-center px-2 max-w-lg w-full">
          <Link
            to={isAuthenticated ? "/app" : "/"}
            className="text-white text-sm font-light py-1 px-5 rounded hover:text-cyan-400"
          >
            HOME
          </Link>
          {isAuthenticated ? (
            <button
              onClick={logout}
              className="text-white text-sm font-light py-1 px-5 rounded hover:text-cyan-400"
            >
              LOGOUT
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white text-sm font-light py-1 px-5 rounded hover:text-cyan-400"
              >
                LOGIN
              </Link>
              <Link
                to="/register"
                className="text-white text-sm font-light py-1 px-5 rounded hover:text-cyan-400"
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
