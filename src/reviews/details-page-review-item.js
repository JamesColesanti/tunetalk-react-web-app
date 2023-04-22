/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {findAlbumById} from "../services/albums-service";
import {useSelector} from "react-redux";

const DetailsPageReviewItem = ({reviewDetail}) => {
  const [album, setAlbum] = useState(false);
  const { currentUser } = useSelector((state) => state.users);
  useEffect(() => {
    const getAlbum = async (albumId) => {
      const album = await findAlbumById(albumId);
      setAlbum(album);
    }
    getAlbum(reviewDetail.albumId);
  }, []);
  const releaseYearString = album.release_date ? album.release_date.substring(0, album.release_date.indexOf('-')) : '';

  const stars = [...Array(reviewDetail.stars).keys()]
  return (
      <>
        <div className="review-container">
        <div className={"like-dislike-container"}>
    <button className={"like-dislike-button"} style={{borderBottom: "1px solid whitesmoke"}}>
        <i className="bi bi-hand-thumbs-up"></i>
    </button>
    <button className={"like-dislike-button"} style={{borderTop: "1px solid whitesmoke"}}>
        <i className="bi bi-hand-thumbs-down"></i>
    </button>
</div>
          <div className={"col-2 m-1"}>
            {
              album && <img className="w-100" src={album.images[0].url}/>
            }
          </div>
          <div className={"col-10 m-1"}>
            <div>
              <h4>
                {album.name}
                <small className={"m-1 text-muted"}> {releaseYearString}</small>
                <div>
                  <h6 className={"mt-1"}>
                    <span>{reviewDetail.username}
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
export default DetailsPageReviewItem;