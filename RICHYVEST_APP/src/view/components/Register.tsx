// src/components/Register.tsx
import React, { useState } from 'react';

const Register: React.FC = () => {
  const [registerData, setRegisterData] = useState({ login: '', email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
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
  
      const result = await response.text();
      setMessage(result);
    } catch (error) {
      console.error('Error registering user:', error);
      setMessage('Error registering user.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center mt-8">
      <h2 className="text-2xl mb-4">Register</h2>
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
      <button type="submit" className="btn bg-cyan-400 text-white font-bold py-2 px-4 rounded mt-8">
        Register
      </button>
    </form>
  );
};

export default Register;