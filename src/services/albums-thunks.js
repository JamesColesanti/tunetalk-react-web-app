import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./albums-service"

export const findAlbumsThunk = createAsyncThunk('albums/findAlbums', 
    async (searchTerm) => await service.findAlbums(searchTerm)
)

export const findAlbumDetailsThunk = createAsyncThunk('albums/findAlbumDetails',
    async (albumId) => await service.findAlbumById(albumId)
)

