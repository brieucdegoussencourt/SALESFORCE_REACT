import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { LoginData, loginUser } from "../models/useLogin";

const Login: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [loginData, setLoginData] = useState<LoginData>({
    login: "",
    password: ""
  });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const responseText = await loginUser(loginData);

      if (responseText.startsWith("Success")) {
        login();
        navigate("/app");
      } else {
        setMessage(responseText || "Login failed.");
      }
    } catch (error: any) {
      setMessage(error.message || "Error logging in.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full mb-24">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-max rounded"
      >
        <input
          type="text"
          name="login"
          placeholder="Login"
          value={loginData.login}
          onChange={handleChange}
          className="mb-2 p-2 bg-white rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
          className="mb-4 p-2 bgwhite rounded"
        />
        <div className="bg-cyan-400 text-white text-lg font-medium py-1 px-6 mt-4 rounded hover:text-cyan-900">
          <button className="anim_btn" type="submit">Login</button>
        </div>
        {message && <p className="text-red-500 mt-4">{message}</p>}
      </form>
    </div>
  );
};

export default Login;
