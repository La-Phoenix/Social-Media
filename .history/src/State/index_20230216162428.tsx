import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "Models";

const initialState: InitialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state, action) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        state.error = "User friends non-existent :(";
        console.log("User friends non-existent :(");
      }
    },
  },
});
