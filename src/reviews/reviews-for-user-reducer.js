import {createSlice} from "@reduxjs/toolkit";
import {
  updateReviewThunk,
  findReviewsByUserThunk
} from "../services/reviews-thunks";

const initialState = {
  reviewsForUser: [],
  loading: false
}

const reviewsForUserSlice = createSlice({
  name: 'reviewsForUser',
  initialState,
  extraReducers: {
    [findReviewsByUserThunk.pending]:
        (state) => {
          state.loading = true
          state.reviewsForUser = []
        },
    [findReviewsByUserThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.reviewsForUser = payload
        },
    [findReviewsByUserThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [updateReviewThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          const reviewNdx = state.reviewsForUser
          .findIndex((t) => t._id === payload._id)
          state.reviewsForUser[reviewNdx] = {
            ...state.reviewsForUser[reviewNdx],
            ...payload
          }
        },
  },
});

export default reviewsForUserSlice.reducer;