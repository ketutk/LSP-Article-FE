import logo from "../../assets/logo.png";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { initFlowbite } from "flowbite";
import { MenuLists } from "./menu";
import { whoami } from "../../libs/api/auth.api";

export const Sidebar = ({ component: Component }) => {
  const [user, setUser] = useState();
  const token = localStorage.getItem("token");

  if (!token) {
    localStorage.clear();
    window.location.href = "/login";
  }

  const imageUrl = import.meta.env.VITE_IMAGE_URL;

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await whoami(token);

        setUser(response.data.data);
      } catch (e) {
        console.log(e);
        setTimeout(() => {
          window.location.href = "/login";
        }, 2000);
      }
    };
    fetch();
  }, []);
  return (
    <>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800 bg-gradient-to-r from-amber-500 to-amber-300">
          <a href="/" class="flex items-center ps-2.5 mb-5">
            <img src={logo} class="h-10 me-3 sm:h-20" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">JeWePe</span>
          </a>
          <ul class="space-y-2 font-medium">
            {/* <MenuLists role={"admin"} is_verified={true} /> */}
            <li>
              <a href="/admin/article" class="flex items-center p-2 text-gray-900 hover:text-amber-500 rounded-lg bg-gray-100 group">
                <svg class="w-5 h-5 text-gray-900 transition duration-75 group-hover:text-amber-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 21">
                  <path
                    fill-rule="evenodd"
                    d="M3.559 4.544c.355-.35.834-.544 1.33-.544H19.11c.496 0 .975.194 1.33.544.356.35.559.829.559 1.331v9.25c0 .502-.203.981-.559 1.331-.355.35-.834.544-1.33.544H15.5l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.889c-.496 0-.975-.194-1.33-.544A1.868 1.868 0 0 1 3 15.125v-9.25c0-.502.203-.981.559-1.331ZM7.556 7.5a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.556Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span class="ms-3">Artikel</span>
              </a>
            </li>
            <li className="">
              <a
                onClick={() => {
                  localStorage.clear();
                  window.location.href = "/login";
                }}
                class="flex items-center p-2 text-gray-900 hover:text-amber-500 rounded-lg bg-gray-100 group cursor-pointer"
              >
                <svg class="w-5 h-5 text-gray-900 transition duration-75 group-hover:text-amber-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2" />
                </svg>

                <span class="ms-3">Keluar</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div class="p-4 sm:ml-64 bg-gray-100 min-h-screen">
        <div class="p-4 rounded-lg">{user && <Component user={user} token={token} imageUrl={imageUrl} />}</div>
      </div>
    </>
  );
};
