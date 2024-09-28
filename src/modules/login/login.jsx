import React, { useState } from "react";
import loginLogo from "../../assets/images/login.png";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { login } from "../../libs/api/auth.api";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem("token");
  if (token) {
    setTimeout(() => {
      window.location.href = "/admin/article";
    }, 2000);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await login({ username, password });

      localStorage.setItem("token", response?.data?.data?.token);

      setTimeout(() => {
        window.location.href = "/admin/article";
      }, 2000);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-yellow-100 flex mx-auto overflow-hidden">
      <div className="hidden md:flex w-1/2 bg-gradient-to-t from-amber-500 to-amber-300 px-12 items-center justify-center">
        <img src={loginLogo} alt="Login" className="h-100 w-100 object-cover" />
      </div>

      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-center text-black mb-12">LOGIN</h1>
        <div className="w-full max-w-md mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-black font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-black font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <button type="submit" className="w-full text-black p-3 rounded-md font-bold bg-amber-400 hover:bg-amber-500 transition duration-300" disabled={isLoading}>
              {isLoading ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
