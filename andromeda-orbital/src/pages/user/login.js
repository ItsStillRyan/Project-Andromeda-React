import React from "react";
import {Row, Col, Container } from 'react-bootstrap'

//import componenets
import LoginComp from '../../components/login'
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
                                <img src={logo} className="login-logo-img" alt="androLogo"/>
                                <p>Welcome to The Andromeda Orbital Station.</p>
                                <p>Logging in</p>
                            </div>
                        </Col>
                        <LoginComp />
                    </Row>
                </Container>
            </React.Fragment >
        )
    }
}
