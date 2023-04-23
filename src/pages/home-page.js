/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect} from 'react';
import HomeReviewItem from "../reviews/home-review-item.js";
import {useDispatch, useSelector} from "react-redux";
import {findTop5ReviewsThunk} from "../services/reviews-thunks.js";
import HomeHeaderAnonymous from "../components/home-header-anonymous";
import HomeHeaderUser from "../components/home-header-user";

function HomePage () {
  const {reviews, loading} = useSelector((state) => state.reviews)
  const { currentUser } = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTop5ReviewsThunk());
    }, []);

    return (
        <>
          {
            currentUser ?  <HomeHeaderUser/> : <HomeHeaderAnonymous/>
          }
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <h3 className={"text-muted d-flex justify-content-right"}>Recent Reviews</h3>
              <hr></hr>
              {
                loading && <p>Loading...</p>
              }
              {
                reviews.map(review => <HomeReviewItem key={review._id} reviewDetail={review}/> )
              }
            </div>
            <div className="col-1"></div>
          </div>
        </>
    );
}
export default HomePage;