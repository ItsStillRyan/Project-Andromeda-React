import React, { useState } from "react";
import axios from "axios";
import config from "../../src/config";
import { Form, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const BASE_URL = config.BASE_URL



export default function LoginComp() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    let clickLogin = async () => {
        const response = await axios.post(BASE_URL + "/api/users/login", {
            'username': username,
            'password': password
        })
        let idTest = localStorage.getItem('id', response.data.id)
        if (idTest) {
            localStorage.removeItem("accessToken")
            localStorage.removeItem("refreshToken")
            localStorage.removeItem("id")
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            localStorage.setItem('id', response.data.id)
        } else {
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            localStorage.setItem('id', response.data.id)
        }
        console.log(response.data)
        setTimeout(window.location.reload(), 3000)
    }


    return (
        <Col className="show-col">
            <div className="loginForm-section">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="login-label">Username</Form.Label>
                        <Form.Control

                            type="Username"
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
                    <Link to="/">
                        <Button
                            variant="outline-warning"
                            onClick={clickLogin}
                        >Log in</Button>
                    </Link>
                </Form>
            </div>
            <div className="registerHere-section">
                <p>Don't have an account? <Link to="/register">Register Here!</Link></p>
            </div>
        </Col>
    )
}