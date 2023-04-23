import React, {useEffect, useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {updateUserThunk} from "../services/users-thunks";

const EditProfileModal = ({editModalIsOpen, close}) => {
    const { currentUser } = useSelector((state) => state.currentUser);
    const [user, setUser] = useState(currentUser);
    const dispatch = useDispatch()

    useEffect(() => {
        setUser(currentUser);
    }, [currentUser]);

    const editUserHandler = () => {
        console.log(user)
        dispatch(updateUserThunk(user));
        console.log(currentUser)
    }

    if (!user) {
        return <div></div>;
    }

    return (
        <Modal show={editModalIsOpen} onHide={() => close()}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="form-group w-100">
                    <div className={"m-1"}>
                        <label>Username</label>
                        <input
                            type="text"
                            className="form-control"
                            value={user.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                        />
                    </div>
                    <div className={"m-1"}>
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                    </div>
                    <div className={"m-1"}>
                        <label>First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={user.firstName}
                            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                        />
                    </div>
                    <div className={"m-1"}>
                        <label>Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={user.lastName}
                            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                        />
                    </div>
                    <div className={"m-1"}>
                        <label>Email</label>
                        <input
                            type="text"
                            className="form-control"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => {
                    editUserHandler();
                    close();
                }}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default EditProfileModal;