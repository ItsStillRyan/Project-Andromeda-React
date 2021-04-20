import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Row, Col, Container, InputGroup, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import config from "../../config";
//images
import logo from "../../images/logo.png"

const BASE_URL = config.BASE_URL


export default function Register() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirm_password, setconfirm_password] = useState("")
    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [contact, setcontact] = useState("")
    const [email, setemail] = useState("")
    const [address, setaddress] = useState("")
    const [postalCode, setpostalCode] = useState("")
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(true);
    const [showError, setShowError] = useState(true);

    const sendForm = async () => {
        const response = await axios.post(BASE_URL + "/api/users/register", {
            'username': username,
            'password': password,
            'confirm_password': confirm_password,
            'fname': fname,
            'lname': lname,
            'contact': contact,
            'email': email,
            'address': address,
            'postalCode': postalCode
        })
    }


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
        } else {
            this.sendForm()
        }
        setValidated(true);
    };





    return (
        <React.Fragment>
            <Container className="fulllogin-section">
                <Row>
                    <Col className="show-col">
                        <div className="logo-signature">
                            <img src={logo} className="login-logo-img" alt="androLogo" />
                            <p>Welcome to The Andromeda Orbital Station.</p>
                            <p>Registering New User</p>
                        </div>

                    </Col>
                    <Col className="show-col">
                        <div className="registerForm-section">

                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                {/* USERNAME */}
                                <Form.Group controlId="formGroupUsername">
                                    <Form.Label className="login-label">Username</Form.Label>
                                    <Form.Control
                                        required
                                        placeholder="Username"
                                        name="username"
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a Username.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {/* PASSWORD */}
                                <Form.Group controlId="formGroupPassword">
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
                                        Please provide a Password.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {/* CONFIRM PASSWORD */}
                                <Form.Group controlId="formGroupConfirmPassword">
                                    <Form.Label className="login-label">Confirm Password</Form.Label>
                                    <Form.Control
                                        required
                                        type="password"
                                        placeholder="Confirm Password"
                                        name="confirm_password"
                                        value={confirm_password}
                                        onChange={e => setconfirm_password(e.target.value)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Password does not match.
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <div className="h-divider"></div>

                                {/* FIRST NAME */}
                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGroupFname">
                                        <Form.Label className="login-label">First Name</Form.Label>
                                        <Form.Control
                                            required
                                            placeholder="John"
                                            name="fname"
                                            value={fname}
                                            onChange={e => setfname(e.target.value)}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid first name.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    {/* LAST NAME */}
                                    <Form.Group as={Col} controlId="formGroupLname">
                                        <Form.Label className="login-label">Last Name</Form.Label>
                                        <Form.Control
                                            required
                                            placeholder="Doe"
                                            name="lname"
                                            value={lname}
                                            onChange={e => setlname(e.target.value)}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid last name.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                {/* CONTACT */}
                                <Form.Group controlId="formGroupContact">
                                    <Form.Label className="login-label">Contact Number</Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>+65</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            required
                                            placeholder="81234567"
                                            name="contact"
                                            value={contact}
                                            onChange={e => setcontact(e.target.value)}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid contact number.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                {/* EMAIL */}
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label className="login-label">Email</Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        placeholder="Enter email"
                                        name="email"
                                        value={email}
                                        onChange={e => setemail(e.target.value)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid email.
                                        </Form.Control.Feedback>
                                </Form.Group>
                                {/* ADDRESS */}
                                <Form.Group controlId="formGroupAddress">
                                    <Form.Label className="login-label">Address</Form.Label>
                                    <Form.Control
                                        required
                                        as="textarea"
                                        rows={3}
                                        placeholder="Address"
                                        name="address"
                                        value={address}
                                        onChange={e => setaddress(e.target.value)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid address.
                                        </Form.Control.Feedback>
                                </Form.Group>
                                {/* POSTAL CODE */}
                                <Form.Group controlId="formGroupPostal">
                                    <Form.Label className="login-label">Postal Code</Form.Label>
                                    <Form.Control
                                        required
                                        placeholder="Enter Postal Code"
                                        name="postalCode"
                                        value={postalCode}
                                        onChange={e => setpostalCode(e.target.value)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid postal code.
                                        </Form.Control.Feedback>
                                </Form.Group>
                                <Link to="/login">
                                    <Button
                                        variant="outline-warning"
                                    >Submit</Button>
                                </Link>
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