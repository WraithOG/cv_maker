import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

function RenderDom(){
    const container = document.getElementById("root");
    const root = ReactDOM.createRoot(container);
    root.render(<App />);
}

RenderDom();