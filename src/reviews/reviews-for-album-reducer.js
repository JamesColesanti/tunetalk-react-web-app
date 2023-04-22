import {createSlice} from "@reduxjs/toolkit";
import {findReviewsForAlbumThunk, createReviewThunk} from "../services/reviews-thunks";

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
        (state, { payload }) => {
            state.loading = false
            state.reviewsForAlbum.push(payload)
        },
  },
});

export default reviewsForAlbumSlice.reducer;