import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./albums-service"

export const findAlbumsThunk = createAsyncThunk('albums/findAlbums', 
    async (searchTerm) => await service.findAlbums(searchTerm)
)

export const findTop5ReviewsThunk = createAsyncThunk('reviews/findTop5Reviews', 
    async () => await service.findTop5Reviews()
)

