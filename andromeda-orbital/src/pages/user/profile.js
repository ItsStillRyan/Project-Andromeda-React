import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useParams, Link } from "react-router-dom"
import config from "../../config";

const BASE_URL = config.BASE_URL


export default function Profile() {

    const userid = localStorage.getItem("id")
    const [profile, setProfile] = useState({})
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [contact, setContact] = useState("")
    const [address, setAddress] = useState("")
    const [postalCode, setpostalCode] = useState("")


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

    console.log(profile)



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

                    

                    {/* <Row>
                        <Col xs={3}>Username: </Col>
                        <Col><p>{profile.username}</p></Col>
                        <Col xs={2}>

                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>Email: </Col>
                        <Col><p>{profile.email}</p></Col>
                        <Col xs={2}>
                            <Button variant="outline-info" size="sm">Change</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>Password: </Col>
                        <Col><p>{profile.username}</p></Col>
                        <Col xs={2}>
                            <Button variant="outline-info" size="sm">Change</Button>
                        </Col>
                    </Row> */}
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
                    {/* <Row>
                        <Col xs={3}>First Name: </Col>
                        <Col><p>{profile.fname}</p></Col>
                        <Col xs={2}>
                            <Button variant="outline-info" size="sm">Change</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>Last Name: </Col>
                        <Col><p>{profile.lname}</p></Col>
                        <Col xs={2}>
                            <Button variant="outline-info" size="sm">Change</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>Contact: </Col>
                        <Col><p>{profile.contact}</p></Col>
                        <Col xs={2}>
                            <Button variant="outline-info" size="sm">Change</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>Address: </Col>
                        <Col><p>{profile.address}</p></Col>
                        <Col xs={2}>
                            <Button variant="outline-info" size="sm">Change</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={3}>Postal Code: </Col>
                        <Col><p>{profile.postalCode}</p></Col>
                        <Col xs={2}>
                            <Button variant="outline-info" size="sm">Change</Button>
                        </Col>
                    </Row> */}
                </div>
                <Button
                    variant="outline-danger"
                    onClick={logoutClick}
                    href="/"
                >Log Out</Button>
            </div>
        </React.Fragment>
    )

}

