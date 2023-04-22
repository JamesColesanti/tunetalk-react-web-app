import { createSlice } from "@reduxjs/toolkit";
import {findAlbumDetailsThunk} from "../services/albums-thunks";

const initialState = {
    albumDetail: {},
    loading: false
}

const albumDetailsSlice = createSlice({
    name: 'albumDetails',
    initialState,
    extraReducers: {
        [findAlbumDetailsThunk.pending]:
            (state) => {
                state.loading = true
                state.albumDetail = []
            },
        [findAlbumDetailsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.albumDetail = payload
            },
        [findAlbumDetailsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
    },
});

export default albumDetailsSlice.reducer;
