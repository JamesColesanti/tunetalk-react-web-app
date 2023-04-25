import React from 'react';
import {Button, Modal} from "react-bootstrap";

const EditUserRoleModal = ({originalUser, editModalIsOpen, close, updateUser}) => {
    return (
        <Modal show={editModalIsOpen} onHide={() => close()}>
            <Modal.Header closeButton>
                <Modal.Title>Make User Admin</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="form-group w-100">
                    <div className={"m-1"}>
                        Are you sure you want to make this user an admin? This action cannot be undone.
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={close}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => {
                    updateUser({ ...originalUser, isAdmin: true });
                    close();
                }}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default EditUserRoleModal;