import React, {useEffect} from "react";
import userAlbums from "../data/user-albums.json";
import {useDispatch, useSelector} from "react-redux";
import {
  findLikedReviewsThunk
} from "../services/reviews-thunks";
import HomeReviewItem from "../reviews/home-review-item";

const HomeHeaderUser = () => {
  const { currentUser } = useSelector((state) => state.currentUser);
  const {reviews, loading} = useSelector((state) => state.reviews)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findLikedReviewsThunk());
  }, []);

  return (
      <>
        <div className="row">
          <div className="col-12 text-center mt-5 mb-5">
            <h1>Welcome back <span className={"text-muted"}>{currentUser.username}</span></h1>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-1"></div>
          <div className="col-10">
            <div className={"text-center"}>
              <h3>We think you'd like these albums...</h3>
            </div>
            <div className="d-flex justify-content-center">
              {
                userAlbums.map(album =>
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
            <h3 className={"text-muted d-flex justify-content-right"}>Recently Liked Reviews</h3>
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

export default HomeHeaderUser;