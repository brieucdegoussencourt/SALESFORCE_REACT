// src/components/Login.tsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';


const Login: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [loginData, setLoginData] = useState({ login: '', password: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('handleSubmit called');
  
    const payload = {
      action: 'login',
      login: loginData.login,
      password: loginData.password,
    };
    console.log('Payload:', payload);
  
    try {
      const response = await fetch('https://easyvest-dev-ed.develop.my.salesforce-sites.com/services/apexrest/api/public/User', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      console.log('Fetch response received');
  
      let result = await response.text();
      console.log('API Response:', result);
  
      // Remove surrounding quotes if present
      result = result.trim();
      if (result.startsWith('"') && result.endsWith('"')) {
        result = result.substring(1, result.length - 1);
      }
      console.log('Cleaned API Response:', result);
  
      if (result.startsWith('Success')) {
        // Update authentication state
        console.log('Login successful, calling login() and navigating to /app');
        login(); // From AuthContext
        navigate('/app');
        console.log('After navigate call');
      } else {
        console.log('Login failed:', result);
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