import * as React from "react";
import {Modal, Button, Form} from "react-bootstrap";
import './AddUser.css';

export class AddUser extends React.Component {
    render() {

        const {isVisible, onCancel, onSave} = this.props;

        return (
            <Modal show={isVisible} onHide={onCancel} className="addUserModal">
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" name="name"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="email" name="email"/>
                        </Form.Group>
                        <Form.Text className="text-muted">
                            We'll never share your name and email with anyone else.
                        </Form.Text>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onCancel}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
