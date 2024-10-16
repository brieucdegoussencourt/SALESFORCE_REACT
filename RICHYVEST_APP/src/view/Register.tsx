// src/components/Register.tsx
import React from 'react';
import useRegister from '../models/useRegister';

const Register: React.FC = () => {
  const { registerData, message, handleChange, handleSubmit } = useRegister();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center mt-24">
      <input
        type="text"
        name="login"
        placeholder="Login"
        value={registerData.login}
        onChange={handleChange}
        className="mb-2 p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={registerData.email}
        onChange={handleChange}
        className="mb-2 p-2 border rounded"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={registerData.password}
        onChange={handleChange}
        className="mb-4 p-2 border rounded"
      />
      <button
        type="submit"
        className="border bg-cyan-200 text-cyan-900 font-medium py-1 px-6 mt-4 rounded hover:bg-cyan-400  hover:text-white"
      >
        Register
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default Register;