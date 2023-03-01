import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ValuesProvider } from "./context/values.context";
import { WaveProvider } from "./context/wave.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WaveProvider>
      <ValuesProvider>
        <App />
      </ValuesProvider>
    </WaveProvider>
  </React.StrictMode>
);
