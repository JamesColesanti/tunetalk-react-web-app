import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { findUserByIdThunk } from "../services/users-thunks";
import { useDispatch, useSelector } from "react-redux";
import ProfileReviewItem from "../reviews/profile-review-item";
import { findReviewsByUserThunk } from "../services/reviews-thunks";

function UserProfilePage() {
  const { currentUser } = useSelector((state) => state.currentUser);
  const { user, uLoading } = useSelector((state) => state.user);
  const { reviewsForUser, rLoading } = useSelector((state) => state.reviewsForUser);
  const dispatch = useDispatch();
  const { uid } = useParams();

  useEffect(() => {
    dispatch(findUserByIdThunk(uid));
    dispatch(findReviewsByUserThunk(uid));
  }, [dispatch, uid]);

  if (uLoading || rLoading || !user || !reviewsForUser) {
    return <div>Loading...</div>
  }

  return (
      <div className={"container mt-4"}>
        <div className={"d-flex flex-column"}>
          <h2>
            {user.firstName + ' ' + user.lastName}
          </h2>
          <span>{'@' + user.username}</span>
          <span>{reviewsForUser.length} reviews</span>
        </div>
        <div className={"mt-4"}>
          <div className={"text-muted d-flex justify-content-between"}>
            <h4>Recent Reviews by {user.username}</h4>
          </div>
          {
              !rLoading && reviewsForUser.map(review => <ProfileReviewItem key={review.id} reviewDetail={review}/> )
          }
        </div>
      </div>
  );
}

export default UserProfilePage;