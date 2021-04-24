import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button, Row, Col, Container, InputGroup, } from 'react-bootstrap'
import { useParams, Link } from "react-router-dom"
import config from "../../config";

const BASE_URL = config.BASE_URL
const userid = localStorage.getItem("id")


export default function UpdateProfile() {

    const userid = localStorage.getItem("id")

    const [profile, setProfile] = useState({})

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


    useEffect(() => {
        const profileFetch = async () => {
            const response = await axios.get(BASE_URL + "/api/users/profile/" + userid, {
                'headers': {
                    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
                }
            })
            setProfile(response.data)
        }
        profileFetch()
    }, [])

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            event.stopPropagation();

            const response = await axios.post(BASE_URL + "/api/users/" + userid + "/update", {
                "username": username,
                "password": password,
                "confirm_password": confirm_password,
                "fname": profile.fname,
                "lname": profile.lname,
                "contact": profile.contact,
                "email": email,
                "address": profile.address,
                "postalCode": profile.postalCode
            })
        }
        setValidated(true);
    };


    if (userid) {
        return (
            <React.Fragment>
                <div className="profileSection">
                    <div>
                        <Form.Row className="justify-content-md-center">
                            <Col id="authorizationSection" lg={5}>
                                <p className="profileTitles">Profile</p>
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    {/* USERNAME */}
                                    <Form.Group controlId="formGroupUsername">
                                        <Form.Label className="login-label">Username</Form.Label>
                                        <Form.Control
                                            required
                                            placeholder={profile.username}
                                            name="username"
                                            value={username}
                                            onChange={e => setUsername(e.target.value)}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a Username.
                                    </Form.Control.Feedback>
                                    </Form.Group>
                                    {/* EMAIL */}
                                    <Form.Group controlId="formGroupEmail">
                                        <Form.Label className="login-label">Email</Form.Label>
                                        <Form.Control
                                            required
                                            type="email"
                                            placeholder={profile.email}
                                            name="email"
                                            value={email}
                                            onChange={e => setemail(e.target.value)}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid email.
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
                                    <div className="profileButton">
                                        <Button
                                            type="submit"
                                            variant="outline-info"

                                        >Update Profile Info</Button>
                                    </div>

                                </Form>
                            </Col>
                        </Form.Row>
                    </div>
                    <div className="profileButton">
                        <Link to={"/profile/"+userid}>
                        <Button
                            variant="outline-warning"
                        >Back
                        </Button>
                        </Link>
                    </div>


                </div>
            </React.Fragment >
        )
    } else if (!userid) {
        window.location.assign("/unauthorize")
    }


}

