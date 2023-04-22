/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect} from 'react';
import ReviewItem from "../reviews/review-item.js";
import {useDispatch, useSelector} from "react-redux";
import {findTop5ReviewsThunk} from "../services/albums-thunks";

function HomePage () {
  const {reviews, loading} = useSelector((state) => state.reviews)
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTop5ReviewsThunk());
    }, []);

    return (
        <>
          <div className="row">
            <div className="col-12 text-center mt-5 mb-5">
              <h1>Welcome to TuneTalk</h1>
              <h2>Listen to albums. Like your favorite. Share your thoughts.</h2>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-1"></div>
            <div className="col-10">
              <div className="d-flex justify-content-center">
                <img src="../images/albums/bad_bunny.png" className="w-25 m-1"/>
                <img src="../images/albums/beyonce.jpeg" className="w-25 m-1"/>
                <img src="../images/albums/morgan_wallen.webp" className="w-25 m-1"/>
                <img src="../images/albums/her_loss.webp" className="w-25 m-1"/>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <h3 className={"text-muted d-flex justify-content-right"}>Recent Reviews</h3>
              <hr></hr>
              {
                  reviews.length != 0 && reviews.map(review => <ReviewItem key={review.id} reviewDetail={review}/> )
              }
            </div>
            <div className="col-1"></div>
          </div>
        </>
    );
}
export default HomePage;