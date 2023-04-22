import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {findReviewsForAlbumThunk} from "../services/reviews-thunks.js";
import CreateReview from './create-review.js';
import DetailsPageReviewItem from '../reviews/details-page-review-item.js';

function AlbumDetailsPage () {
    const {aid} = useParams();
    const {reviewsForAlbum, loading} = useSelector((state) => state.reviewsForAlbum)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(findReviewsForAlbumThunk(aid));
    }, []);

    <div className={"like-dislike-container"}>
    <button className={"like-dislike-button"} style={{borderBottom: "1px solid whitesmoke"}}>
        <i className="bi bi-hand-thumbs-up"></i>
    </button>
    <button className={"like-dislike-button"} style={{borderTop: "1px solid whitesmoke"}}>
        <i className="bi bi-hand-thumbs-down"></i>
    </button>
</div>
    return (
        <div className="AlbumDetailsPage">
            <h1>Welcome to the AlbumDetailsPage</h1>
            <CreateReview aid={aid}/>
            {
                reviewsForAlbum.length != 0 && reviewsForAlbum.map(
                    review => <DetailsPageReviewItem key={review.id} reviewDetail={review}/> )
            }
        </div>
    );
}
export default AlbumDetailsPage;