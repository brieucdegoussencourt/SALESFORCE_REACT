import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyan-100 p-3 w-full z-50 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex space-x-4 mt-4 md:mt-0">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Brieuc de Goussencourt
          </p>
          <a href="https://instagram.com" className="hover:text-gray-400">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" className="hover:text-gray-400">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
