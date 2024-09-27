import axios from "axios";
import { toast } from "react-toastify";

const url = import.meta.env.VITE_API_URL;

export async function getAllArticle(token) {
  try {
    const response = await axios.get(`${url}/article/`, {
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
export async function getAllPublishedArticle() {
  try {
    const response = await axios.get(`${url}/article/published/`);

    return response;
  } catch (e) {
    toast.error(e.response.data.message);
    throw e;
  }
}
export async function getArticleDetail(article_id, token) {
  try {
    const response = await axios.get(`${url}/article/${article_id}`, {
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
export async function getPublishedArticleDetail(article_id) {
  try {
    const response = await axios.get(`${url}/article/published/${article_id}`);

    return response;
  } catch (e) {
    toast.error(e.response.data.message);
    throw e;
  }
}

export async function addArticle(data, token) {
  try {
    const response = await axios.post(`${url}/article/`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    toast.success(response.data.message);

    return response;
  } catch (e) {
    toast.error(e.response.data.message);
    throw e;
  }
}
export async function editArticle(article_id, data, token) {
  try {
    const response = await axios.put(`${url}/article/${article_id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    toast.success(response.data.message);

    return response;
  } catch (e) {
    toast.error(e.response.data.message);
    throw e;
  }
}

export async function publishArticle(article_id, token) {
  try {
    const response = await axios.put(`${url}/article/status/${article_id}`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    toast.success(response.data.message);

    return response;
  } catch (e) {
    toast.error(e.response.data.message);
    throw e;
  }
}
export async function deleteArticle(article_id, token) {
  try {
    const response = await axios.delete(`${url}/article/${article_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    toast.success(response.data.message);

    return response;
  } catch (e) {
    toast.error(e.response.data.message);
    throw e;
  }
}
