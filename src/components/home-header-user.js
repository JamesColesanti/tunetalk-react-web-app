import React from "react";
import userAlbums from "../data/user-albums.json";
import {useSelector} from "react-redux";

const HomeHeaderUser = () => {
  const { currentUser } = useSelector((state) => state.currentUser);

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
      </>
  );
}

export default HomeHeaderUser;