import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import Auth0ProviderWithNavigate from "./features/auth/Auth0ProviderWithNavigate.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Auth0ProviderWithNavigate>
      <StrictMode>
        <App />
      </StrictMode>
    </Auth0ProviderWithNavigate>
    ,
  </BrowserRouter>,
);
