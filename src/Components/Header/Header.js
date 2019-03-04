import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Form from "react-bootstrap/es/Form";
import './Header.css';


export const Header = (props) => {
    const {onSearchChange, onSelectChange, limit} = props;

    return (
        <header>
            <Container>
                <Row>
                    <Col md={4}>

                        <Form.Control as="select" onChange={onSelectChange} defaultValue={limit}>
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>

                        </Form.Control>

                    </Col>
                    <Col md={{span: 4, offset: 4}}>
                        <Form.Control type="text" placeholder="Search" onChange={onSearchChange} />
                        <br/>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}