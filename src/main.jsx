import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import Books from "./components/Books.jsx";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/عرض الفوائد" element={<App />} />
      <Route path="/عرض الكتب" element={<Books />} />
    </Routes>
  </BrowserRouter>
);
