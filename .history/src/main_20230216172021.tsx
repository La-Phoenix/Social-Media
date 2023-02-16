import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import {PersistGate} from "redux-persist/integration/react"
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = { key: "root", storage };

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
