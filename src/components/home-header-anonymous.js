/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect} from "react";
import featuredAlbums from "../data/featured-albums.json";
import HomeReviewItem from "../reviews/home-review-item";
import {useDispatch, useSelector} from "react-redux";
import {
  findTop5ReviewsThunk
} from "../services/reviews-thunks";

const HomeHeaderAnonymous = () => {
  const {reviews, loading} = useSelector((state) => state.reviews);
  console.log(reviews);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('here');
    dispatch(findTop5ReviewsThunk());
  }, [dispatch]);

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
            <div className={"text-center text-muted"}>
              <h3>Trending on TuneTalk</h3>
            </div>
            <div className="d-flex justify-content-center">
              {
                // eslint-disable-next-line
                featuredAlbums.map(album =>
                    <a className={"home-link"} href={`/details/${album.id}`}>
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

export default HomeHeaderAnonymous;