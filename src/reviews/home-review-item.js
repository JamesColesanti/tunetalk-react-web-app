/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {findAlbumById} from "../services/albums-service";
import {useSelector} from "react-redux";
import {findUserById} from "../services/users-service";

const HomeReviewItem = ({reviewDetail}) => {
  const [album, setAlbum] = useState(false);
  const [user, setUser] = useState({username: "[Deactivated User]"});
  const { currentUser } = useSelector((state) => state.users);
  const stars = [...Array(reviewDetail.stars).keys()]

  useEffect(() => {
    const getAlbum = async (albumId) => {
      const album = await findAlbumById(albumId);
      setAlbum(album.albumInfo);
    }
    const getUser = async (userId) => {
      const user = await findUserById(userId);
      setUser(user)
    }
    getAlbum(reviewDetail.albumId);
    getUser(reviewDetail.userId);
  }, []);
  const releaseYearString = album.release_date ? album.release_date.substring(0, album.release_date.indexOf('-')) : '';

  return (
      <>
        <div className="review-container">
          <div className={"col-2 m-1"}>
            {
              album &&
              <a href={`/details/${reviewDetail.albumId}`}>
                 <img className="home-image" src={album.images[0].url}/>
              </a>
            }
          </div>
          <div className={"col-10 m-1"}>
            <div>
              <h4>
                <a className="review-link" href={`/details/${reviewDetail.albumId}`}>
                  {album.name}
                </a>
                <small className={"m-1 text-muted"}> {releaseYearString}</small>
                <div>
                  <h6 className={"mt-1 text-muted"}>
                    <span> <a className={"review-link"} href={`/profile/${reviewDetail.userId}`}> {user.username} </a>
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
export default HomeReviewItem;