import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Articles from "./components/core/Articles.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:article_id" element={<Articles />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
