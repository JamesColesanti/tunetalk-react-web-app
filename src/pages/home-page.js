/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect} from 'react';
import HomeReviewItem from "../reviews/home-review-item.js";
import {useDispatch, useSelector} from "react-redux";
import {findTop5ReviewsThunk} from "../services/reviews-thunks.js";
import featuredAlbums from "../data/featured-albums.json"
import AlbumReviewItem from "../reviews/album-review-item";
import ProfileReviewItem from "../reviews/profile-review-item";

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
                {
                  featuredAlbums.map(album =>
                      <a className={"home-link"} href={`/album/${album.id}`}>
                        <img src={album.image} className={"home-image"}/>
                      </a>
                  )
                }
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
                  reviews.length != 0 && reviews.map(review => <HomeReviewItem key={review.id} reviewDetail={review}/> )
              }
            </div>
            <div className="col-1"></div>
          </div>
        </>
    );
}
export default HomePage;