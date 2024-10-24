// src/components/Register.tsx
import React from "react";
import useRegister from "../models/useRegister";

const Register: React.FC = () => {
  const { registerData, message, handleChange, handleSubmit } = useRegister();

  return (
    <div className="flex flex-col items-center justify-center h-full mb-24">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center mb-24"
      >
        <input
          type="text"
          name="login"
          placeholder="Login"
          value={registerData.login}
          onChange={handleChange}
          className="mb-2 bg-white p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={registerData.email}
          onChange={handleChange}
          className="mb-2 p-2 bg-white rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={registerData.password}
          onChange={handleChange}
          className="mb-4 p-2 bg-white rounded"
        />
        <div className="anim_btn bg-cyan-400 text-white text-lg font-medium py-1 px-6 mt-4 rounded hover:text-cyan-900">
          <button type="submit">Register</button>
        </div>
        {message && <p className="text-red-500 mt-4">{message}</p>}
      </form>
    </div>
  );
};

export default Register;
