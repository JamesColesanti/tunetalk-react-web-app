/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
// import React from 'react';

// function ProfilePage () {
//     return (
//         <div>
//             <div className="row mt-4">
//               <div className="col-1"></div>
//               <div className="col-3 d-flex justify-content-center">
//                 <img className="rounded-circle" height={100} src={`../images/albums/bad_bunny.png`}/>
//                 <div className="m-2">
//                   <div className="fw-bold">aniamisiorek</div>
//                   <button type="button"
//                           className="btn btn-secondary btn-sm">Edit Profile
//                   </button>
//                 </div>
//               </div>
//               <div className="col-8 d-flex justify-content-center">
//                 <div>
//                   4 likes
//                 </div>
//                 <span>10 reviews</span>
//               </div>
//               <div className="col-1"></div>
//             </div>
//         </div>
//     );
// }
// export default ProfilePage;

import React, { useState, useEffect } from "react";
import * as userService from "../services/users-service";
import { useNavigate, useParams } from "react-router-dom";
import { profileThunk, logoutThunk } from "../services/users-thunks";
import { useDispatch, useSelector } from "react-redux";

function ProfilePage() {
  const { username } = useParams();
  const { currentUser } = useSelector((state) => state.users);
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getProfile = async () => {
    // const profile = await userService.profile();
    const action = await dispatch(profileThunk());
    setProfile(action.payload);
  };
  const getUserByUsername = async () => {
    const user = await userService.findUserByUsername(username);
    setProfile(user);
  };
  const logout = async () => {
    dispatch(logoutThunk());
    navigate("/login");
  };
  useEffect(() => {
    if (username) {
      getUserByUsername();
    } else {
      getProfile();
    }
  }, []);
  return (
    <div>
      <h1>
        <button className="float-end btn btn-primary">Follow</button>
        Profile {username}
      </h1>
      {profile && (
        <div>
          <label>Username</label>
          {currentUser && (
            <input
              type="text"
              className="form-control"
              value={profile.username}
              onChange={(e) =>
                setProfile({ ...profile, username: e.target.value })
              }
            />
          )}
          {!currentUser && <p>{profile.username}</p>}
          <label>First Name</label>
          {currentUser && (
            <input
              type="text"
              className="form-control"
              value={profile.firstName}
              onChange={(e) =>
                setProfile({ ...profile, firstName: e.target.value })
              }
            />
          )}
          {!currentUser && <p>{profile.firstName}</p>}
        </div>
      )}
      {currentUser && (
        <button onClick={() => logout()} className="btn btn-danger">
          Logout
        </button>
      )}
    </div>
  );
}

export default ProfilePage;