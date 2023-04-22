import {createSlice} from "@reduxjs/toolkit";
import {
  findTop5ReviewsThunk,
  findReviewsByUserThunk,
  findReviewsForAlbumThunk, createReviewThunk
} from "../services/reviews-thunks";
import {findReviewsForAlbum} from "../services/reviews-service";

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
  },
});

export default reviewsForAlbumSlice.reducer;