/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {findAlbumById} from "../services/albums-service";
import {useDispatch, useSelector} from "react-redux";
import {updateReviewThunk, deleteReviewThunk} from "../services/reviews-thunks";
import {useNavigate} from "react-router-dom";

const ProfileReviewItem = ({reviewDetail}) => {
  const [album, setAlbum] = useState(false);
  const { currentUser } = useSelector((state) => state.currentUser);
  const stars = [...Array(reviewDetail.stars).keys()]
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const getAlbum = async (albumId) => {
      const album = await findAlbumById(albumId);
      setAlbum(album.albumInfo);
    }
    getAlbum(reviewDetail.albumId);
  }, [reviewDetail]);

  if (!album) {
    return <></>;
  }
  const releaseYearString = album.release_date ? album.release_date.substring(0, album.release_date.indexOf('-')) : '';

  const likePostHandler = (id) => {
    if (currentUser) {
      let liked;
      let likes;
      if (reviewDetail.liked) {
        liked = false
        likes = reviewDetail.likes - 1
      } else {
        liked = true
        likes = reviewDetail.likes + 1
      }
      dispatch(updateReviewThunk({
        _id: id,
        likes: likes,
        liked: liked}))
    } else {
      navigate("/login")
    }
  }

  const deleteReviewHandler = () => {
    dispatch(deleteReviewThunk(reviewDetail));
  }

  return (
      <>
        <div className="review-container">
          <div className={"col-2 p-1"}>
            {
                album &&
                <a href={`/details/${reviewDetail.albumId}`}>
                  <img className="home-image" src={album.images[0].url}/>
                </a>
            }
          </div>
          <div className={"col-9 p-1"}>
            <div>
              <h4>
                <a className="review-link" href={`/details/${reviewDetail.albumId}`}>
                  {album.name}
                </a>
                <small className={"m-1 text-muted"}> {releaseYearString}</small>
                <div>
                  <h6 className={"mt-1 text-muted"}>
                      <span className={"text-warning"}>
                      {
                        stars.map(_ => <FontAwesomeIcon icon={faStar}/>)
                      }
                    </span>
                  </h6>
                </div>
              </h4>
            </div>
            <p>{reviewDetail.content}</p>
            <p><FontAwesomeIcon
                className={currentUser && reviewDetail.liked ? "text-primary" : ""}
                onClick={() => {likePostHandler(reviewDetail._id)}}
                icon={faHeart}/> {reviewDetail.likes} likes</p>
          </div>
          <div className={"col-1 d-flex justify-content-end"}>
            {currentUser && (currentUser._id === reviewDetail.userId || currentUser.isAdmin) ? <i className="bi bi-x-lg ml-auto"
                                                                                                  onClick={() => deleteReviewHandler()}></i> : <></> }
          </div>
        </div>
      </>
  );
};
export default ProfileReviewItem;