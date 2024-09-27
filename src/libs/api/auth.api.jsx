import axios from "axios";
import { toast } from "react-toastify";

const url = import.meta.env.VITE_API_URL;

export async function login({ username, password }) {
  try {
    const response = await axios.post(`${url}/auth/login`, { username, password });

    toast.success("Anda berhasil login");

    return response;
  } catch (e) {
    toast.error(e.response.data.message);
    console.log(e.response.data);
    throw e;
  }
}

export async function whoami(token) {
  try {
    const response = await axios.get(`${url}/auth/whoami`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (e) {
    toast.error(e.response.data.message);
    throw e;
  }
}
