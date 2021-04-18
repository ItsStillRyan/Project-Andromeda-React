import React from "react";
import { Form, Button, Row, Col, Container, InputGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

//images
import logo from "../../images/logo.png"

export default class Register extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container className="fulllogin-section">
                    <Row>
                        <Col className="show-col">
                            <div className="logo-signature">
                                <img src={logo} className="login-logo-img" />
                                <p>Welcome to The Andromeda Orbital Station.</p>
                                <p>Registering New User</p>
                            </div>

                        </Col>
                        <Col className="show-col">
                            <div className="registerForm-section">
                                <Form>
                                    <Form.Group controlId="formGroupUsername">
                                        <Form.Label className="login-label">Username</Form.Label>
                                        <Form.Control placeholder="Username" />
                                    </Form.Group>

                                    <Form.Group controlId="formGroupPassword">
                                        <Form.Label className="login-label">Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Form.Group controlId="formGroupConfirmPassword">
                                        <Form.Label className="login-label">Confirm Password</Form.Label>
                                        <Form.Control type="password" placeholder="Confirm Password" />
                                    </Form.Group>

                                    <div className="h-divider"></div>

                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGroupFname">
                                            <Form.Label className="login-label">First Name</Form.Label>
                                            <Form.Control placeholder="John" />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="formGroupLname">
                                            <Form.Label className="login-label">Last Name</Form.Label>
                                            <Form.Control placeholder="Doe" />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Group controlId="formGroupContact">
                                        <Form.Label className="login-label">Contact Number</Form.Label>
                                        <InputGroup className="mb-2">
                                            <InputGroup.Prepend>
                                                <InputGroup.Text>+65</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control placeholder="81234567" />

                                        </InputGroup>
                                    </Form.Group>

                                    <Form.Group controlId="formGroupEmail">
                                        <Form.Label className="login-label">Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group controlId="formGroupAddress">
                                        <Form.Label className="login-label">Address</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="Address" />
                                    </Form.Group>

                                    <Form.Group controlId="formGroupPostal">
                                        <Form.Label className="login-label">Postal Code</Form.Label>
                                        <Form.Control type="email" placeholder="Enter Postal Code" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">Submit</Button>
                                </Form>
                                <div className="registerHere-section">
                                    <p>Already have an account? <Link to="/login">Log In Here!</Link></p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}