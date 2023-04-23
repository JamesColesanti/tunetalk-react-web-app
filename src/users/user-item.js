/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState }  from "react";
import EditUserRoleModal from "../components/edit-user-role-modal";
import * as userService from "../services/users-service";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import DeleteUserModal from "../components/delete-user-modal";
import { deleteUserThunk } from "../services/users-thunks";

const UserItem = ({ userDetails }) => {
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

    return(
        <div className="mt-1 search-result-container">
            {/* <img className="album-cover" width="150" height="150" src={albumDetail.images[0].url} alt={albumDetail.name + ' Cover'}/> */}
            <div className="h-100 ps-2 pt-1 flex-fill wd-text-ellipses overflow-hidden">
                <span className="wd-bold-text wd-font-size-32 wd-text-ellipses">
                    {user.username}
                </span>
                <br/>
                <span className="wd-bold-text wd-font-size-32 wd-text-ellipses">
                    Role: {user.isAdmin ? <span>Admin</span> : <span>User</span>}
                </span>
                <br/>
                <span>
                    <button type="button" onClick={() => {navigate(profilePageUri)}} className={"wd-btn-transparent mt-1 float-end"}>View Profile</button>
                    { !user.isAdmin ? <button type="button" onClick={() => {setEditRoleModalIsOpen(true)}} className={"wd-btn-transparent mt-1 float-end"}>Make User Admin</button> : <></>}
                    <EditUserRoleModal originalUser={user} editModalIsOpen={editRoleModalIsOpen} close={handleClose} updateUser={makeUserAdmin} />
                    { !user.isAdmin ? <button type="button" onClick={() => {setDeleteModalIsOpen(true)}} className={"wd-btn-transparent mt-1 float-end"}>Delete User</button> : <></>}
                    <DeleteUserModal editModalIsOpen={deleteModalIsOpen} close={handleClose} deleteUser={deleteUserHandler} />
                </span>
            </div>
        </div>
    );
};
export default UserItem;