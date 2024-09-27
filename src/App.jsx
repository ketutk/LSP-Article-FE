import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Home } from "./modules/home/home";
import { Login } from "./modules/login/login";
import { Register } from "./modules/register/register";
import { Navbar } from "./modules/templates/navbar";
import { initFlowbite } from "flowbite";
import { Sidebar } from "./modules/templates/sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ArticleAdmin } from "./modules/admin/article/article.admin";
import { AddArticleAdmin } from "./modules/admin/article/article-add.admin";
import ArticleDetail from "./modules/admin/article/article-detail.admin";
import { EditArticleAdmin } from "./modules/admin/article/article-edit.admin";
import { ArticleUser } from "./modules/article/article.user";
import ArticleDetailUser from "./modules/article/article-detail.user";

initFlowbite();
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Umum */}
          <Route path="/" element={<Navbar component={Home} />} />
          <Route path="/login" element={<Navbar component={Login} />} />

          {/* User */}
          <Route path="/article" element={<Navbar component={ArticleUser} />} />
          <Route path="/article/:article_id" element={<Navbar component={ArticleDetailUser} />} />

          {/* Admin */}
          <Route path="/admin/article" element={<Sidebar component={ArticleAdmin} />} />
          <Route path="/admin/article/add" element={<Sidebar component={AddArticleAdmin} />} />
          <Route path="/admin/article/edit/:article_id" element={<Sidebar component={EditArticleAdmin} />} />
          <Route path="/admin/article/:article_id" element={<Sidebar component={ArticleDetail} />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer theme="colored" />
    </>
  );
}

export default App;
