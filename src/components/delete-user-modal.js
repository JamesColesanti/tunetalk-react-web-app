import React from 'react';
import {Button, Modal} from "react-bootstrap";

const DeleteUserModal = ({editModalIsOpen, close, deleteUser}) => {
    return (
        <Modal show={editModalIsOpen} onHide={() => close()}>
            <Modal.Header closeButton>
                <Modal.Title>Delete User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="form-group w-100">
                    <div className={"m-1"}>
                      Are you sure you want to delete this user? This action cannot be undone.
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => {
                    deleteUser();
                    close();
                }}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default DeleteUserModal;