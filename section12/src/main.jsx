import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// BrowserRouter
// : 브라우저 라우터는 브라우저의 현재 주소를 저장하고 감지하는 역할을 한다.
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
