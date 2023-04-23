import React from "react";
import featuredAlbums from "../data/featured-albums.json";

const HomeHeaderAnonymous = () => {

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
      </>
  );
}

export default HomeHeaderAnonymous;