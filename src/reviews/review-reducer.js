import {createSlice} from "@reduxjs/toolkit";
import {
  findLikedReviewsThunk,
  findTop5ReviewsThunk,
  updateReviewThunk,
  deleteReviewThunk,
} from "../services/reviews-thunks";

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
    [findLikedReviewsThunk.pending]:
        (state) => {
          state.loading = true
          state.reviews = []
        },
    [findLikedReviewsThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.reviews = payload
        },
    [findLikedReviewsThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [updateReviewThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          const reviewNdx = state.reviews
          .findIndex((t) => t._id === payload._id)
          state.reviews[reviewNdx] = {
            ...state.reviews[reviewNdx],
            ...payload
          }
        },
    [deleteReviewThunk.fulfilled]:
        (state, { payload }) => {
            state.loading = false
            state.reviews = state.reviews.filter(user => user._id !== payload._id)
        },
  },
});

export default reviewsSlice.reducer;