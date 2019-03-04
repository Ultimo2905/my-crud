import React from "react";
import {Button} from "react-bootstrap";
import './UserRow.css';


export class UserRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditMode: false
        };
    }

    toggleMode = () => {
        this.setState({
            isEditMode: !this.state.isEditMode
        });
    };

    render() {
        const {id, name, email, deleteUser} = this.props;
        const {isEditMode} = this.state;

        return (
            <tr className="tableUsers">
                <td className="user-row__id ">{id}</td>
                <td>{isEditMode ? <input type="text" value={name}/> : name}</td>
                <td>{email}</td>
                <td>
                    {
                        isEditMode ? (
                            <Button onClick={this.toggleMode}>Save</Button>
                        ) : (
                            <Button onClick={this.toggleMode}>Update</Button>
                        )
                    }
                    <Button onClick={(event) => deleteUser(id)}>Delete</Button>
                </td>
            </tr>
        );
    }
}