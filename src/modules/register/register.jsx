import React from "react";
import loginLogo from "../../assets/images/login.png";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();

  // Declare state variables for each input field
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nik, setNik] = useState("");
  const [photo, setPhoto] = useState(null); // For file input, use null as initial value
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("nik", nik);
    formData.append("photo", photo);
    formData.append("password", password);

    await register(formData, navigate, setIsLoading);
  };

  return (
    <div className="min-h-screen w-full bg-yellow-100 flex mx-auto overflow-hidden">
      <div className="w-full md:w-1/2 md:mx-8 p-8 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-center text-black mb-6 mt-24">REGISTER</h1>
        <div className="w-full max-w-md mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-black font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-black font-bold mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                type="number"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-black font-bold mb-2" htmlFor="nik">
                NIK
              </label>
              <input
                id="nik"
                type="number"
                placeholder="Enter your nik number"
                className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={nik}
                onChange={(e) => setNik(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-black font-bold mb-2" htmlFor="photo">
                Photo
              </label>
              <input
                id="photo"
                type="file"
                className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-none"
                onChange={(e) => setPhoto(e.target.files[0])} // Handle file input
              />
            </div>
            <div className="mb-4">
              <label className="block text-black font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="w-full text-black p-3 rounded-md font-bold bg-amber-400 hover:bg-amber-500 transition duration-300" disabled={isLoading}>
              {isLoading ? "Loading..." : "Register"}
            </button>
          </form>
          <p className="mt-4 text-center text-black font-bold">
            Have an account?{" "}
            <a href="/login" className="text-blue-700 font-bold hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>

      <div className="hidden md:flex w-1/2 bg-gradient-to-t from-amber-500 to-amber-300 p-12 mt-5 items-center justify-center">
        <img src={loginLogo} alt="Register" className="h-100 w-100 object-cover" />
      </div>
    </div>
  );
};
