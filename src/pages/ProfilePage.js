import React from 'react';

function ProfilePage () {
    return (
        <div>
            <div className="row mt-4">
              <div className="col-1"></div>
              <div className="col-3 d-flex justify-content-center">
                <img className="rounded-circle" height={100} src={`../images/albums/bad_bunny.png`}/>
                <div className="m-2">
                  <div className="fw-bold">aniamisiorek</div>
                  <button type="button"
                          className="btn btn-secondary btn-sm">Edit Profile
                  </button>
                </div>
              </div>
              <div className="col-8 d-flex justify-content-center">
                <div>
                  4 likes
                </div>
                <span>10 reviews</span>
              </div>
              <div className="col-1"></div>
            </div>
        </div>
    );
}
export default ProfilePage;