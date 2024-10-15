// src/components/Register.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [registerData, setRegisterData] = useState({ login: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('handleSubmit called');
  
    const payload = {
      action: 'register',
      login: registerData.login,
      email: registerData.email,
      password: registerData.password,
    };
  
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
        console.log('Registration successful, navigating to /login');
        navigate('/login');
      } else {
        console.log('Registration failed:', result);
        setMessage(result);
      }
    } catch (error) {
      console.error('Error registering user:', error);
      setMessage('Error registering user.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center mt-24">
      <input
        type="text"
        name="login"
        placeholder="Login"
        value={registerData.login}
        onChange={handleChange}
        className="mb-2 p-2 border"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={registerData.email}
        onChange={handleChange}
        className="mb-2 p-2 border"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={registerData.password}
        onChange={handleChange}
        className="mb-4 p-2 border"
      />
      <button type="submit" className="bg-cyan-900 text-white font-medium py-1 px-6 mt-4 rounded hover:bg-cyan-600 transition-shadow shadow-md hover:shadow-lg">
        Register
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default Register;