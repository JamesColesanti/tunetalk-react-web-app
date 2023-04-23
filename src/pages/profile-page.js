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
    dispatch(findReviewsByUserThunk(currentUser._id));
  }, [dispatch]);

  console.log(currentUser);



  //const updateProfile = async (newProfile) => {
   // await userService.updateUser(newProfile);
    //setProfile(newProfile);
 // }

  const logout = async () => {
    dispatch(logoutThunk());
    navigate("/login");
  };
  console.log(currentUser);


  if (!currentUser || !reviewsForUser) {
    return <div>Loading...</div>;
  }

  console.log(reviewsForUser);
  console.log(reviewsForUser && reviewsForUser.length > 0)

  function handleClose() {
    setEditModalIsOpen(false);
  }

  return (
    <div className={"container mt-4"}>
      <span className={"wd-bold-text wd-font-size-32"}>{currentUser.firstName + ' ' + currentUser.lastName}</span>
      <button type="button" onClick={() => {setEditModalIsOpen(true)}} className={"wd-btn-transparent mt-1 float-end"}>Edit Profile</button>
      <br/>
      <span>{'@' + currentUser.username}</span><br/>
      { reviewsForUser && <span>{reviewsForUser.length} reviews</span> }
      {
          (reviewsForUser && reviewsForUser.length > 0) ? <div className={"mt-4"}>
            <span className={"text-muted"}>Reviews</span>
            <div className={"mt-2"}>
                {
                    !loading && reviewsForUser.map(review => <ProfileReviewItem key={review._id} reviewDetail={review}/>)
                }
            </div>
          </div> :
          <div>
            <span className={"text-muted"}>No reviews yet</span>
          </div>
      }
    </div>
  );
}

export default ProfilePage;