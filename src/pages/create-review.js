/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from "react";
import { createReviewThunk } from "../services/reviews-thunks";
import {useDispatch, useSelector} from "react-redux";

const CreateReview = (aid) => {
    let [reviewContent, setReviewContent] = useState('');
    let [reviewStars, setReviewStars] = useState(0);
    const { currentUser } = useSelector((state) => state.users);

    const dispatch = useDispatch();
    const createReviewClickHandler = () => {
        const newReview = {
            content: reviewContent,
            userId: currentUser._id,
            stars: reviewStars,
            liked: false,
            likes: 0,
            albumId: aid.aid,
        }
        dispatch(createReviewThunk(newReview));
    }
    return (
        <div className="row">
            {/* <div className="col-auto">
                <img src="/images/nasa.png" width={60}/>
            </div> */}
            <div className="col-10">
                <textarea value={reviewContent} placeholder="What's happening?"
                className="form-control border-0"
                onChange={(event) => setReviewContent(event.target.value)}>
                </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                    onClick={createReviewClickHandler}>
                    Submit
                    </button>
                    <div className="text-primary fs-2">
                        <i className="bi bi-card-image me-3"></i>
                        <i className="bi bi-filetype-gif me-3"></i>
                        <i className="bi bi-bar-chart me-3"></i>
                        <i className="bi bi-emoji-smile me-3"></i>
                        <i className="bi bi-geo-alt"></i>
                    </div>
                </div>
            </div>
            <div className="col-12"><hr/></div>
        </div>
    );
}

export default CreateReview;
