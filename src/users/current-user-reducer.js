import { createSlice } from "@reduxjs/toolkit";
import {
  loginThunk,
  profileThunk,
  registerThunk,
  logoutThunk,
} from "../services/users-thunks";

const initialState = {
  currentUser: null,
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {},
  extraReducers: {
    [loginThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [logoutThunk.fulfilled]: (state, action) => {
      state.currentUser = null;
    },
    [registerThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
    [profileThunk.fulfilled]: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export default currentUserSlice.reducer;