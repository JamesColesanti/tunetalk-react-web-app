/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, {useState} from "react";
import EditUserRoleModal from "../components/edit-user-role-modal";
import * as userService from "../services/users-service";
import {useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import DeleteUserModal from "../components/delete-user-modal";
import {deleteUserThunk} from "../services/users-thunks";

const UserItem = ({userDetails}) => {
  const [editRoleModalIsOpen, setEditRoleModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [user, setUser] = useState(userDetails);
  const navigate = useNavigate();
  const profilePageUri = '/profile/' + user._id;

  const dispatch = useDispatch();
  const deleteUserHandler = () => {
    dispatch(deleteUserThunk(userDetails._id));
  }

  const makeUserAdmin = async (newUserDetails) => {
    await userService.updateUser(newUserDetails);
    setUser(newUserDetails);
  }

  function handleClose() {
    setEditRoleModalIsOpen(false);
  }

  function handleCloseDeleteModal() {
    setDeleteModalIsOpen(false);
  }

  return (
      <div className="p-2 mb-2 user-result-container">
        <div>
          <h5 className="wd-bold-text wd-text-ellipses">
            {user.username}
          </h5>
          <h7 className="wd-text-ellipses">Role: {user.isAdmin ? <span>Admin</span> :
              <span>User</span>}
          </h7>
        </div>
        <div>
          <button type="button"
                  onClick={() => {navigate(profilePageUri)}}
                  className={"wd-btn-transparent"}>View Profile</button>
            {!user.isAdmin ? <button type="button" onClick={() => {
              setEditRoleModalIsOpen(true)
            }} className={"wd-btn-transparent"}>Make User
              Admin</button> : <></>}
            <EditUserRoleModal originalUser={user}
                               editModalIsOpen={editRoleModalIsOpen}
                               close={handleClose} updateUser={makeUserAdmin}/>
            {!user.isAdmin ? <button type="button" onClick={() => {
              setDeleteModalIsOpen(true)
            }} className={"wd-btn-transparent"}>Delete
              User</button> : <></>}
            <DeleteUserModal editModalIsOpen={deleteModalIsOpen}
                             close={handleCloseDeleteModal}
                             deleteUser={() => deleteUserHandler()}/>
        </div>
      </div>
  );
};
export default UserItem;