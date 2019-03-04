import {Table} from "react-bootstrap";
import React from "react";
import {UserRow} from "../UserRow/UserRow";
import {TableHeaderCell} from "../TableHeaderCell/TableHeaderCell";

export class TableUsers extends React.Component {
    render() {
        const {deleteUser}= this.props;

        return (
            <Table striped bordered hover>
                <thead>
                <tr id="tableColorWhite">
                    <TableHeaderCell title="#" order="desc"/>
                    <TableHeaderCell title="First Name" order="asc"/>
                    <TableHeaderCell title="Email"/>
                    <td >Actions</td>
                </tr>
                </thead>
                <tbody id="tableColorWhite">
                {
                    this.props.users.map((user) => {
                        return <UserRow {...user} key={user.id} deleteUser={deleteUser}/>;
                    })
                }
                </tbody>
            </Table>
        );
    }
}