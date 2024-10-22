// src/components/NavBar.tsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const NavBar: React.FC = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="bg-cyan-100 p-4 w-full z-50">
        <div className="flex justify-center items-center space-x-14">
        <Link to="/" className="text-cyan-900 font-light hover:text-cyan-400">
            HOME
          </Link>
          {isAuthenticated ? (
            <Link
              to="/login"
              onClick={logout}
              className="text-cyan-900 font-light hover:text-cyan-400"
            >
              LOGOUT
            </Link>
          ) : (
            <>
              <Link to="/login" className="text-cyan-900 font-light hover:text-cyan-400">
                LOGIN
              </Link>
              <Link to="/register" className="text-cyan-900 font-light hover:text-cyan-400">
                REGISTER
              </Link>
            </>
          )}
        </div>
    </nav>
  );
};

export default NavBar;
