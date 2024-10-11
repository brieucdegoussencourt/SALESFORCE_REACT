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
  
    const payload = {
      action: 'login',
      login: loginData.login,
      password: loginData.password,
    };
  
    try {
      const response = await fetch('https://easyvest-dev-ed.develop.my.salesforce-sites.com/services/apexrest/api/public/User', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      const result = await response.text();
      if (result.startsWith('Success')) {
        // Update authentication state
        login(); // From AuthContext
        navigate('/app');
      } else {
        setMessage(result);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setMessage('Error logging in.');
    }
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