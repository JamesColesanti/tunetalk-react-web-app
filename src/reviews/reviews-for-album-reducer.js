import {createSlice} from "@reduxjs/toolkit";
import {
  findReviewsForAlbumThunk, createReviewThunk, updateReviewThunk, deleteReviewThunk
} from "../services/reviews-thunks";

const initialState = {
  reviewsForAlbum: [],
  loading: false
}

const reviewsForAlbumSlice = createSlice({
  name: 'reviewsForAlbum',
  initialState,
  extraReducers: {
    [findReviewsForAlbumThunk.pending]:
        (state) => {
          state.loading = true
          state.reviewsForAlbum = []
        },
    [findReviewsForAlbumThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.reviewsForAlbum = payload
        },
    [findReviewsForAlbumThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [createReviewThunk.fulfilled]:
        (state, {payload}) => {
          state.loading = false
          state.reviewsForAlbum.push(payload)
        },
    [updateReviewThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          const reviewNdx = state.reviewsForAlbum
          .findIndex((t) => t._id === payload._id)
          state.reviewsForAlbum[reviewNdx] = {
            ...state.reviewsForAlbum[reviewNdx],
            ...payload
          }
        },
    [deleteReviewThunk.fulfilled]:
        (state, { payload }) => {
            state.loading = false
            state.reviewsForAlbum = state.reviewsForAlbum.filter(user => user._id !== payload._id)
        },
  },
});

export default reviewsForAlbumSlice.reducer;