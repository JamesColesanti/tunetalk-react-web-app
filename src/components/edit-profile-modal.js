import React, {useEffect, useState} from 'react';
import {Button, Modal} from "react-bootstrap";

const EditProfileModal = ({profile, editModalIsOpen, close, updateProfile}) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        setUser(profile);
    }, [profile]);
    if (!user) {
        return <div></div>;
    }
    return (
        <Modal show={editModalIsOpen} onHide={() => close()}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="form-group w-50">
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
                    updateProfile(user);
                    close();
                }}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default EditProfileModal;