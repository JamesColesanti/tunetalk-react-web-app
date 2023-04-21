import { createSlice } from "@reduxjs/toolkit";
import {findAlbumsThunk} from "../services/albums-thunks";

const initialState = {
    albums: [],
    loading: false
}

const albumsSlice = createSlice({
    name: 'albums',
    initialState,
    extraReducers: {
        [findAlbumsThunk.pending]:
            (state) => {
                state.loading = true
                state.albums = []
            },
        [findAlbumsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.albums = payload
            },
        [findAlbumsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
    },
});

export default albumsSlice.reducer;
