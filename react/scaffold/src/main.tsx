import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ArweaveWalletKit } from "arweave-wallet-kit";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ArweaveWalletKit>
      <div className="min-h-screen relative">
        <App />
      </div>
    </ArweaveWalletKit>
  </React.StrictMode>
);
