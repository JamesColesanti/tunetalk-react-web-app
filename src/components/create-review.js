/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from "react";
import { createReviewThunk } from "../services/reviews-thunks";
import {useDispatch, useSelector} from "react-redux";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  const stars = [1,2,3,4,5]

  function getColor(num) {
    return num <= reviewStars;
  }

  return (
      <div className="row">
        <div className="col-12 mb-2">
                <textarea value={reviewContent} placeholder="Leave a review"
                          className="form-control"
                          onChange={(event) => setReviewContent(event.target.value)}>
                </textarea>
          <div className={"mt-1"}>
            {
              stars.map(star =>
                  <FontAwesomeIcon icon={faStar} className={getColor(star) ? "text-warning": ""} onClick={_ => setReviewStars(star)}/>
              )
            }
          </div>
          <div>
            <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                    onClick={createReviewClickHandler}>
              Submit
            </button>
          </div>
        </div>
      </div>
  );
}

export default CreateReview;