import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import { Toaster } from "react-hot-toast";

// Soft UI Dashboard React Context Provider
import { SoftUIControllerProvider } from "context";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <SoftUIControllerProvider>
      <div>
        <Toaster />
      </div>
      <App />
    </SoftUIControllerProvider>
  </BrowserRouter>
);
