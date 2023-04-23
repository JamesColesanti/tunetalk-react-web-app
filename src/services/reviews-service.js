import axios from 'axios';
const API_BASE = "http://localhost:4000/api";

export const findTop5Reviews = async () => {
    const response = await axios.get(`${API_BASE}/topReviews`);
    const reviews = response.data;
    return reviews;
}

export const findReviewsForAlbum = async (aid) => {
    const response = await axios.get(`${API_BASE}/albums/${aid}/reviews`);
    const reviews = response.data;
    return reviews;
}

export const findReviewsByUser = async (uid) => {
    const response = await axios.get(`${API_BASE}/users/${uid}/reviews`);
    const reviews = response.data;
    return reviews;
}

export const createReview = async (newReview) => {
    const aid = newReview.albumId
    const response = await axios.post(`${API_BASE}/albums/${aid}/reviews`, newReview);
    return response.data;
}

export const updateReview = async (newReview) => {
    const response = await axios.put(`${API_BASE}/albums/${newReview.rid}/reviews`, newReview);
    return response.data;
}