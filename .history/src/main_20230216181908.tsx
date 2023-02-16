import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import authReducer from "./State";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

const persistConfig = { key: "root", storage };
const persistedReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
  reducer: persistReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
