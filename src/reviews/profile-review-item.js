/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {findAlbumById} from "../services/albums-service";
import {useSelector} from "react-redux";

const ProfileReviewItem = ({reviewDetail}) => {
  const [album, setAlbum] = useState(false);
  const { currentUser } = useSelector((state) => state.users);
  const stars = [...Array(reviewDetail.stars).keys()]

  useEffect(() => {
    const getAlbum = async (albumId) => {
      const album = await findAlbumById(albumId);
      setAlbum(album);
    }
    getAlbum(reviewDetail.albumId);
  }, []);

  return (
      <>
        <div className="review-container">
          <div className={"col-2 m-1"}>
            {
                album && <img className="w-100" src={album.images[0].url}/>
            }
          </div>
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
                className={currentUser && reviewDetail.liked ? "text-primary" : ""} icon={faHeart}/> {reviewDetail.likes} likes</p>
          </div>
        </div>
      </>
  );
};
export default ProfileReviewItem;