import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./reviews-service"

export const findTop5ReviewsThunk = createAsyncThunk('reviews/findTop5Reviews', 
    async () => await service.findTop5Reviews()
)

export const findLikedReviewsThunk = createAsyncThunk('reviews/findLikedReviews', 
    async () => await service.findLikedReviews()
)

export const findReviewsForAlbumThunk = createAsyncThunk('reviews/findReviewsForAlbum', 
    async (aid) => await service.findReviewsForAlbum(aid)
)

export const findReviewsByUserThunk = createAsyncThunk('reviews/findReviewsByUser', 
    async (uid) => await service.findReviewsByUser(uid)
)

export const createReviewThunk = createAsyncThunk('reviews/createReview',
    async (newReview) => await service.createReview(newReview)
)

export const updateReviewThunk = createAsyncThunk('reviews/updateReview',
    async (newReview) => await service.updateReview(newReview)
)

export const deleteReviewThunk = createAsyncThunk('reviews/deleteReview',
    async (review) => await service.deleteReview(review)
)