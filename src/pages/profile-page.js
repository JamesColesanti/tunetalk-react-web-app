import React, { useState, useEffect } from "react";
import * as userService from "../services/users-service";
import { useNavigate, useParams } from "react-router-dom";
import {
  profileThunk,
  logoutThunk,
  findUserByIdThunk
} from "../services/users-thunks";
import { useDispatch, useSelector } from "react-redux";
import ProfileReviewItem from "../reviews/profile-review-item";
import EditProfileModal from "../components/edit-profile-modal";
import {findReviewsByUserThunk} from "../services/reviews-thunks";

function ProfilePage() {
  const { currentUser } = useSelector((state) => state.currentUser);
  //const [profile, setProfile] = useState({});
  const { reviewsForUser, loading } = useSelector((state) => state.reviewsForUser);
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      dispatch(findReviewsByUserThunk(currentUser._id));
    }
  }, [dispatch]);

  //console.log(currentUser);



  //const updateProfile = async (newProfile) => {
   // await userService.updateUser(newProfile);
    //setProfile(newProfile);
 // }

  const logout = async () => {
    dispatch(logoutThunk());
    navigate("/login");
  };


  if (!currentUser || !reviewsForUser) {
    return <div>Loading...</div>;
  }

  function handleClose() {
    setEditModalIsOpen(false);
  }

  return (
      <div className={"container mt-4"}>
        <div className={"d-flex justify-content-between"}>
          <div className={"d-flex flex-column"}>
            <h2>
              {currentUser.firstName + ' ' + currentUser.lastName}
            </h2>
            <span>{'@' + currentUser.username}</span>
            <span>{reviewsForUser.length} reviews</span>
            <button type="button" onClick={() => {logout()}} className={"btn btn-primary w-75 mt-2"}>Log out</button>
          </div>
          <div className={"d-flex flex-column"}>
            <button type="button" onClick={() => {setEditModalIsOpen(true)}} className={"wd-btn-transparent"}>Edit Profile</button>
          </div>
        </div>
        <div className={"mt-4"}>
          <div className={"text-muted d-flex justify-content-between"}>
            <h4>Your recent reviews</h4>
          </div>
          {
              !loading && reviewsForUser.map(review => <ProfileReviewItem key={review._id} reviewDetail={review}/> )
          }
        </div>
        <EditProfileModal editModalIsOpen={editModalIsOpen} close={handleClose}/>
      </div>
  );
}

export default ProfilePage;