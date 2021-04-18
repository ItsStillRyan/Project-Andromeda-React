import React from "react";
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
//images
import logo from "../../images/logo.png"

export default class Login extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container className="fulllogin-section">
                    <Row>
                        <Col className="show-col">
                            <div className="logo-signature">
                                <img src={logo} className="login-logo-img" />
                                <p>Welcome to The Andromeda Orbital Station.</p>
                                <p>Logging in</p>
                            </div>

                        </Col>
                        <Col className="show-col">
                            <div className="loginForm-section">
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label className="login-label">Username</Form.Label>
                                        <Form.Control type="Username" placeholder="Enter Username" />
                                        {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label className="login-label">Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">Submit</Button>
                                </Form>
                            </div>
                            <div className="registerHere-section">
                                <p>Don't have an account? <Link to="/register">Register Here!</Link></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
