/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useDispatch, useSelector} from "react-redux";
import {findUserById} from "../services/users-service";
import {useNavigate} from "react-router-dom";
import {updateReviewThunk} from "../services/reviews-thunks";

const AlbumReviewItem = ({reviewDetail}) => {
  const [user, setUser] = useState({username: "[Deactivated User]"});
  const { currentUser } = useSelector((state) => state.currentUser);
  const stars = [...Array(reviewDetail.stars).keys()]
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const getUser = async (userId) => {
      const user = await findUserById(userId);
      if (user) {
        setUser(user)
      }
    }
    getUser(reviewDetail.userId);
  }, []);

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

  return (
      <>
        <div className="review-container">
          <div className={"col-10 m-1"}>
            <div>
              <h4>
                <div>
                  <h6 className={"mt-1 text-muted"}>
                    <span>
                     {
                       user._id && <a className={"review-link"}
                                      href={user._id ? `/profile/${reviewDetail.userId}` : ""}> {user.username} </a>
                      }
                      {
                        !user._id && <a className={"review-link"}> {user.username} </a>
                      }
                      <span className={"m-1 text-warning"}>
                      {
                        stars.map(_ => <FontAwesomeIcon icon={faStar}/>)
                      }
                    </span>
                    </span>
                  </h6>
                </div>
              </h4>
            </div>
            <p>{reviewDetail.content}</p>
            <p><FontAwesomeIcon className={currentUser && reviewDetail.liked ? "text-primary": ""}
                                onClick={() => {likePostHandler(reviewDetail._id)}}
                                icon={faHeart}/> {reviewDetail.likes} likes</p>
          </div>
        </div>
      </>
  );
};
export default AlbumReviewItem;