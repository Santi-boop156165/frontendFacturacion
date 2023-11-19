import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { BillingProvider } from "./context/ContextProvaiderFactura";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <BillingProvider>
        <App />
      </BillingProvider>
    </BrowserRouter>
    <Toaster position="bottom-right" />
  </React.StrictMode>
);
