import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Row, Col, Table } from 'react-bootstrap'
import { useParams, Link } from "react-router-dom"
import config from "../../config";

const BASE_URL = config.BASE_URL
const userid = localStorage.getItem("id")


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

    const logoutClick = async () => {
        localStorage.clear()
        const logout = await axios.get(BASE_URL + "/api/users/logout")
    }


    if (userid) {
        return (
            <React.Fragment>
                <div className="profileSection">

                    <div id="storeSection">
                        <p className="profileTitles">Dashboard</p>
                        <Link to="/orders">
                            <Button variant="outline-info">Orders</Button>
                        </Link>
                    </div>

                    <Row id="profileRow">
                        <Col id="authorizationSection" lg={5}>
                            <p className="profileTitles">Profile Info</p>
                            <Table borderless>
                                <tbody>
                                    <tr>
                                        <td>Username:</td>
                                        <td>{profile.username}</td>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>{profile.email}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Link to={"/profile/" + userid + "/profileUpdate"}>
                                <Button
                                    variant="outline-info"
                                >Update Profile Info
                        </Button>
                            </Link>
                        </Col>

                        <Col id="profileInfoSection" lg={5}>
                            <p className="profileTitles">Personal Info</p>
                            <Table borderless>
                                <tbody>
                                    <tr>
                                        <td>First Name:</td>
                                        <td>{profile.fname}</td>
                                    </tr>
                                    <tr>
                                        <td>Last Name:</td>
                                        <td>{profile.lname}</td>
                                    </tr>
                                    <tr>
                                        <td>Contact:</td>
                                        <td>{profile.contact}</td>
                                    </tr>
                                    <tr>
                                        <td>Address:</td>
                                        <td>{profile.address}</td>
                                    </tr>
                                    <tr>
                                        <td>Postal Code:</td>
                                        <td>{profile.postalCode}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Link to={"/profile/" + userid + "/personalUpdate"}>
                                <Button
                                    variant="outline-info"
                                >Update Personal Info
                        </Button>
                            </Link>
                        </Col>
                    </Row>
                    <div className="profileButton">
                        <Button
                            variant="outline-danger"
                            onClick={logoutClick}
                            href="/"
                        >Log Out
                        </Button>
                    </div>


                </div>
            </React.Fragment >
        )
    } else if (!userid) {
        window.location.assign("/unauthorize")
    }


}

