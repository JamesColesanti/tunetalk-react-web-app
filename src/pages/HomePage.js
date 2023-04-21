/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function HomePage () {
    return (
        <>
          <div className="row">
            <div className="col-12 text-center mt-5 mb-5">
              <h1>Welcome to TuneTalk</h1>
              <h2>Listen to albums. Like your favorite. Share your thoughts.</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10 d-flex justify-content-center">
              <img src="../images/albums/bad_bunny.png" className="w-25 m-1"/>
              <img src="../images/albums/beyonce.jpeg" className="w-25 m-1"/>
              <img src="../images/albums/morgan_wallen.webp" className="w-25 m-1"/>
              <img src="../images/albums/her_loss.webp" className="w-25 m-1"/>
            </div>
            <div className="col-1"></div>
          </div>
        </>
    );
}
export default HomePage;