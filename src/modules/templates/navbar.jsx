import { ToastContainer } from "react-toastify";
import logo from "../../assets/logo.png";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";

export const Navbar = ({ component: Component }) => {
  const imageUrl = import.meta.env.VITE_IMAGE_URL;

  return (
    <div>
      <nav class="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full z-50">
        <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} class="h-12" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">JeWePe</span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="text-center mb-3 md:mb-0">
                <a href="/" class="text-lg hover:bg-amber-400 px-4 py-2 rounded block md:inline" aria-current="page">
                  Home
                </a>
              </li>
              <li className="text-center mb-3 md:mb-0">
                <a href="/article" class="text-lg hover:bg-amber-400 px-4 py-2 rounded block md:inline" aria-current="page">
                  Artikel
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="w-full bg-gray-100">
        <Component imageUrl={imageUrl} />
      </div>
    </div>
  );
};
