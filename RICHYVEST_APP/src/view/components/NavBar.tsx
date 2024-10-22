import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const NavBar: React.FC = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="bg-cyan-100 p-3 w-full">
      <div className="max-w-3xl mx-auto w-full flex justify-center">
        <div className=" flex justify-around items-center w-full">
          <Link to="/" className="text-cyan-900 font-thin hover:text-cyan-400">
            HOME
          </Link>
          {isAuthenticated ? (
            <Link
              to="/login"
              onClick={logout}
              className="text-cyan-900 font-thin hover:text-cyan-400"
            >
              LOGOUT
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="text-cyan-900 font-thin hover:text-cyan-400"
              >
                LOGIN
              </Link>
              <Link
                to="/register"
                className="text-cyan-900 font-thin hover:text-cyan-400"
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
