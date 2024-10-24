import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const NavBar: React.FC = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gradient-to-l from-cyan-100 to-cyan-200 p-3 w-full">
      <div className="max-w-3xl mx-auto w-full flex justify-center">
        <div className=" flex justify-around items-center w-full">
          <Link
            to="/"
            className="anim_btn text-cyan-900 font-thin hover:text-cyan-400"
          >
            Home
          </Link>
          {isAuthenticated ? (
            <Link
              to="/login"
              onClick={logout}
              className="anim_btn text-cyan-900 font-thin hover:text-cyan-400"
            >
              Logout
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="anim_btn text-cyan-900 font-thin hover:text-cyan-400"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="anim_btn text-cyan-900 font-thin hover:text-cyan-400"
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
