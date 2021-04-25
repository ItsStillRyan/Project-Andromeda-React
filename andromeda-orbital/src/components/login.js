import React, { useState } from "react";
import axios from "axios";
import config from "../../src/config";
import { Form, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const BASE_URL = config.BASE_URL



export default function LoginComp() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [validated, setValidated] = useState(false);



    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            event.stopPropagation();

            const response = await axios.post(BASE_URL + "/api/users/login", {
                'username': username,
                'password': password
            })

            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            localStorage.setItem('id', response.data.id)
            const userid = localStorage.getItem("id")

            
            window.location.assign("/profile/"+userid)
        }
        setValidated(true);

    };

    return (
        <React.Fragment>

            <Col className="show-col">
                <div className="loginForm-section">

                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                        <Form.Group controlId="formBasicUsername">
                            <Form.Label className="login-label">Username</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter Username"
                                name="username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid Username.
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="login-label">Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid Password.
                        </Form.Control.Feedback>
                        </Form.Group>
                        <Button
                            type="submit"
                            variant="outline-warning"
                        >Log in</Button>
                    </Form>
                </div>
                <div className="registerHere-section">
                    <p>Don't have an account? <Link to="/register">Register Here!</Link></p>
                </div>
            </Col>
        </React.Fragment>
    )
}