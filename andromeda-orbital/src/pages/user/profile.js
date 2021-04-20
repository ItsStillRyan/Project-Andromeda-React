import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useParams } from "react-router-dom"
import config from "../../config";

const BASE_URL = config.BASE_URL


export default function Profile() {

    const userid = localStorage.getItem("id")
    const [profile, setProfile] = useState({})

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

    return (
        <React.Fragment>
            <div className="profileSection">
                
                <div className="storeSection">
                    <p className="profileTitles">Store</p>
                </div>

                <div className="authorizationSection">
                    <p className="profileTitles">Authorization</p>
                    <Row>
                        <Col xs={3}>Username: </Col>
                        <Col><p>{profile.username}</p></Col>
                        <Col xs={2}>
                            <Button variant="outline-info" size="sm">Change</Button>
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
                    </Row>
                </div>

                <div className="profileInfoSection">
                    <p className="profileTitles">Profile Info</p>
                    <Row>
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
                    </Row>
                </div>
            </div>
        </React.Fragment>
    )

}

