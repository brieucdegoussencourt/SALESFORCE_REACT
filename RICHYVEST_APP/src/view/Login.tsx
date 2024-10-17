// src/components/Login.tsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { LoginData, loginUser } from '../models/useLogin';

const Login: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [loginData, setLoginData] = useState<LoginData>({ login: '', password: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('handleSubmit called');

    try {
      const responseText = await loginUser(loginData);

      if (responseText.startsWith('Success')) {
        console.log('Login successful, calling login() and navigating to /app');
        login();
        navigate('/app');
      } else {
        console.log('Login failed:', responseText);
        setMessage(responseText || 'Login failed.');
      }
    } catch (error: any) {
      console.error('Error during login:', error);
      setMessage(error.message || 'Error logging in.');
    }
  };

  return (
    <div className="flex items-center justify-center mb-24">
      <form onSubmit={handleSubmit} className="flex flex-col items-center w-max rounded">
        <input
          type="text"
          name="login"
          placeholder="Login"
          value={loginData.login}
          onChange={handleChange}
          className="mb-2 p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
          className="mb-4 p-2 border rounded"
        />
        <button
          type="submit"
          className="border bg-cyan-200 text-cyan-900 font-medium py-1 px-6 mt-4 rounded hover:bg-cyan-400 hover:text-white hover:shadow-lg"
        >
          Login
        </button>
        {message && <p className="text-red-500 mt-4">{message}</p>}
      </form>
    </div>
  );
};

export default Login;