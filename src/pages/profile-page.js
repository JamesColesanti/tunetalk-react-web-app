import React, { useState, useEffect } from "react";
import * as userService from "../services/users-service";
import { useNavigate, useParams } from "react-router-dom";
import { profileThunk, logoutThunk } from "../services/users-thunks";
import { useDispatch, useSelector } from "react-redux";
import {findReviewsByUser} from "../services/reviews-service";
import ProfileReviewItem from "../reviews/profile-review-item";
import EditProfileModal from "../components/edit-profile-modal";

function ProfilePage() {
  const { username } = useParams();
  const { currentUser } = useSelector((state) => state.users);
  const [profile, setProfile] = useState({});
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const getProfile = async () => {
    // const profile = await userService.profile();
    const action = await dispatch(profileThunk());
    setProfile(action.payload);
  };
  const getUserByUsername = async () => {
    const user = await userService.findUserByUsername(username);
    setProfile(user);
  };

  const updateProfile = async (newProfile) => {
    await userService.updateUser(newProfile);
    setProfile(newProfile);
  }

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

  useEffect(() => {
    if (profile._id) {
      findReviewsByUser(profile._id).then(reviews => setReviews(reviews));
    }
  }, [profile]);

  if (!profile || !reviews) {
    return <div>Loading...</div>;
  }

  console.log(reviews);
  console.log(reviews && reviews.length > 0)

  function handleClose() {
    setEditModalIsOpen(false);
  }

  return (
    <div className={"container mt-4"}>
      <span className={"wd-bold-text wd-font-size-32"}>{profile.firstName + ' ' + profile.lastName}</span>
      { currentUser && currentUser._id === profile._id && <button type="button" onClick={() => {setEditModalIsOpen(true)}} className={"wd-btn-transparent mt-1 float-end"}>Edit Profile</button> }
      <br/>
      <span>{'@' + profile.username}</span><br/>
      { reviews && <span>{reviews.length} reviews</span> }
      {
          (reviews && reviews.length > 0) ? <div className={"mt-4"}>
            <span className={"text-muted"}>Reviews</span>
            <div className={"mt-2"}>
                {
                    reviews.map(review => <ProfileReviewItem key={review.id} reviewDetail={review}/>)
                }
            </div>
          </div> :
          <div>
            <span className={"text-muted"}>No reviews yet</span>
          </div>
      }
      <EditProfileModal editModalIsOpen={editModalIsOpen} close={handleClose} profile={profile} updateProfile={updateProfile}/>
    </div>
  );
}

export default ProfilePage;