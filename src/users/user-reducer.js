import { createSlice } from "@reduxjs/toolkit";
import { findUserByIdThunk} from "../services/users-thunks";

const initialState = {
  loading: false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [findUserByIdThunk.pending]:
        (state) => {
          state.loading = true
          state.user = null
        },
    [findUserByIdThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = true
          state.user = payload
        },
    [findUserByIdThunk.rejected]:
        (state, action) => {
          state.loading = true
          state.error = action.error
        },
  },
});

export default userSlice.reducer;