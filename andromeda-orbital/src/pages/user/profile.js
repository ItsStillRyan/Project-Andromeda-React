import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useParams, Link } from "react-router-dom"
import config from "../../config";

const BASE_URL = config.BASE_URL
const userid = localStorage.getItem("id")


export default function Profile() {

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

    const logoutClick = async () => {
        localStorage.clear()
        const logout = await axios.get(BASE_URL + "/api/users/logout")
    }

    const sendUpdateProfile = async () => {
        const response = await axios.post 
    }

    console.log(profile)

    if (userid) {
        return (
            <React.Fragment>
                <div className="profileSection">

                    <div className="storeSection">
                        <p className="profileTitles">Store</p>
                        <Link to="/orders">
                            <Button variant="outline-info">Orders</Button>
                        </Link>
                    </div>

                    <div className="authorizationSection">
                        <p className="profileTitles">Authorization</p>
                        <Row>
                            <Col xs={4}>
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Username: </Form.Label>
                                        <Form.Control
                                            value={profile.username}
                                        ></Form.Control>
                                        <Form.Label>Email: </Form.Label>
                                        <Form.Control
                                            value={profile.email}
                                        ></Form.Control>
                                        <Form.Label>Password: </Form.Label>
                                        <Form.Control></Form.Control>
                                        <Button variant="outline-info" className="profileButton">Update Account info</Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </div>

                    <div className="profileInfoSection">
                        <p className="profileTitles">Profile Info</p>
                        <Row>
                            <Col xs={4}>
                                <Form>
                                    <Form.Group>
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            value={profile.fname}
                                        ></Form.Control>

                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control
                                            value={profile.lname}
                                        ></Form.Control>

                                        <Form.Label>Contact</Form.Label>
                                        <Form.Control
                                            value={profile.contact}
                                        ></Form.Control>

                                        <Form.Label>Address</Form.Label>
                                        <Form.Control
                                            value={profile.address}
                                        ></Form.Control>

                                        <Form.Label>Postal Code</Form.Label>
                                        <Form.Control
                                            value={profile.postalCode}
                                        ></Form.Control>

                                        <Button variant="outline-info" className="profileButton">Update Personal info</Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </div>

                    <Button
                        variant="outline-danger"
                        onClick={logoutClick}
                        href="/"
                    >Log Out</Button>

                </div>
            </React.Fragment>
        )
    } else {
        window.location.assign("/unauthorize")
    }
}

