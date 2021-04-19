import React, { useState } from "react";
import axios from "axios";
import config from "../../src/config";
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const BASE_URL = config.BASE_URL


export default function LoginComp() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

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
                    </Form.Group>
                    <Button 
                    variant="primary" 
                    type="submit"
                    // href={
                    //     () => {
                    //         const profileURL = "/profile"
                    //         const errorURL = "login"
                    //         if (){
                    //             return profileURL
                    //         }else{
                    //             return errorURL
                    //         }
                    //     }
                    // }
                    onClick={ 
                        async () => {
                        const response = await axios.post(BASE_URL + "/api/users/login", {
                            'username': username,
                            'password': password
                        })
                        localStorage.setItem('accessToken', response.data.accessToken);
                        localStorage.setItem('refreshToken', response.data.refreshToken);
                    }}
                    >Log in</Button>
                </Form>
            </div>
            <div className="registerHere-section">
                <p>Don't have an account? <Link to="/register">Register Here!</Link></p>
            </div>
        </Col>
    )
}