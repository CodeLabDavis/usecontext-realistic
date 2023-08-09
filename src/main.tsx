import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { PostsProvider } from "./lib/store/PostsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <PostsProvider>
            <App />
        </PostsProvider>
    </React.StrictMode>
);
