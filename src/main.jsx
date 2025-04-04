import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Articles from "./components/core/Articles.jsx";
import Article from "./components/core/Article.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NCNavbar from "./components/NCNavbar.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <NCNavbar />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Articles />} />
                <Route path="/articles/:article_id" element={<Article />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
