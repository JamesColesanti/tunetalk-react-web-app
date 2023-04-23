import { createSlice } from "@reduxjs/toolkit";
import { findAllUsersThunk } from "../services/users-thunks";

const initialState = {
    loading: false,
    allUsers: [],
};

const allUsersSlice = createSlice({
  name: "allUsers",
  initialState,
  reducers: {},
  extraReducers: {
    [findAllUsersThunk.pending]:
        (state) => {
            state.loading = true
            state.allUsers = []
        },
    [findAllUsersThunk.fulfilled]:
        (state, { payload }) => {
            state.loading = true
            state.allUsers = payload
        },
    [findAllUsersThunk.rejected]:
        (state, action) => {
            state.loading = true
            state.error = action.error
        },
},
});

export default allUsersSlice.reducer;