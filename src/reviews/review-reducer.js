import {createSlice} from "@reduxjs/toolkit";
import {findTop5ReviewsThunk} from "../services/albums-thunks";

const initialState = {
  reviews: [],
  loading: false
}

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  extraReducers: {
    [findTop5ReviewsThunk.pending]:
        (state) => {
          state.loading = true
          state.reviews = []
        },
    [findTop5ReviewsThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.reviews = payload
        },
    [findTop5ReviewsThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
  },
});

export default reviewsSlice.reducer;