// src/components/Register.tsx
import React, { useState } from 'react';

const Register: React.FC = () => {
  const [registerData, setRegisterData] = useState({ login: '', email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement registration logic (e.g., API call to your Salesforce backend)
    console.log('Register data:', registerData);
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