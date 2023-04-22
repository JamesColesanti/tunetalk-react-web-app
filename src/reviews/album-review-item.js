/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useSelector} from "react-redux";
import {findUserById} from "../services/users-service";

const AlbumReviewItem = ({reviewDetail}) => {
  const [user, setUser] = useState({username: "[Deactivated User]"});
  const { currentUser } = useSelector((state) => state.users);
  const stars = [...Array(reviewDetail.stars).keys()]

  useEffect(() => {
    const getUser = async (userId) => {
      const user = await findUserById(userId);
      setUser(user)
    }
    getUser(reviewDetail.userId);
    console.log(user)
  }, []);

  return (
      <>
        <div className="review-container">
          <div className={"col-10 m-1"}>
            <div>
              <h4>
                {
                    !reviewDetail.title && "No Title Given"
                }
                <small className={"m-1 text-muted"}>
                  {
                      !reviewDetail.date && "4/21/2023"
                  }
                </small>
                <div>
                  <h6 className={"mt-1 text-muted"}>
                    <span> {user.username}
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
            <p><FontAwesomeIcon
                className={currentUser && reviewDetail.liked ? "text-primary" : ""} icon={faHeart}/> {reviewDetail.likes} likes</p>
          </div>
        </div>
      </>
  );
};
export default AlbumReviewItem;