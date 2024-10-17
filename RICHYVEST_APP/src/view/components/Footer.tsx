import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyan-100 p-2 w-full z-50 mt-auto">
      <div className="container mx-auto flex items-center justify-center px-4">
        <p className="text-sm font-light mr-4">
          &copy; {new Date().getFullYear()} Richyvest. All rights reserved.
        </p>
        <a href="https://github.com" className="hover:text-cyan-400 mx-2" target='/blank'>
          <FaGithub />
        </a>
        <a href="https://linkedin.com" className="hover:text-cyan-400 mx-2" target='/blank'>
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
