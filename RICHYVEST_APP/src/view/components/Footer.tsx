import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyan-100 p-4 w-full z-50 mt-auto">
      <div className="container mx-auto flex items-center justify-center">
        <p className="text-sm text-cyan-900 font-light mr-2">
          &copy; 2024 Richyvest. All rights reserved.
        </p>
        <a href="https://github.com" className="text-cyan-900 hover:text-cyan-400 mx-2" target='/blank'>
          <FaGithub />
        </a>
        <a href="https://linkedin.com" className="text-cyan-900 hover:text-cyan-400 mx-2" target='/blank'>
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
