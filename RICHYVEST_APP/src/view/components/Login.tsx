// src/components/Login.tsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Login: React.FC = () => {
  const [loginData, setLoginData] = useState({ login: '', password: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual authentication logic (e.g., API call)
    // For now, we'll assume login is always successful
    login();
    navigate('/app');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center mt-8">
      <h2 className="text-2xl mb-4">Login</h2>
      <input
        type="text"
        name="login"
        placeholder="Login"
        value={loginData.login}
        onChange={handleChange}
        className="mb-2 p-2 border"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={loginData.password}
        onChange={handleChange}
        className="mb-4 p-2 border"
      />
      <button type="submit" className="bg-cyan-400 text-white font-bold py-2 px-4 rounded mt-8">
        Login
      </button>
    </form>
  );
};

export default Login;