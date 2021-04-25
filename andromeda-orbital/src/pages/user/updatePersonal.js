import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button, Col, InputGroup, } from 'react-bootstrap'
import { Link } from "react-router-dom"
import config from "../../config";

const BASE_URL = config.BASE_URL
const userid = localStorage.getItem("id")


export default function UpdatePersonal() {

    const [profile, setProfile] = useState({})

    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [contact, setcontact] = useState("")
    const [address, setaddress] = useState("")
    const [postalCode, setpostalCode] = useState("")

    const [validated, setValidated] = useState(false);


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

            await axios.post(BASE_URL + "/api/users/" + userid + "/update", {
                "username": profile.username,
                "password": profile.password,
                "confirm_password": profile.password,
                "fname": fname,
                "lname": lname,
                "contact": contact,
                "email": profile.email,
                "address": address,
                "postalCode": postalCode
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
                            <Col id="profileInfoSection" lg={5}>
                                <p className="profileTitles">Personal Info</p>
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    {/* FIRST NAME */}
                                    <Form.Row>
                                        <Form.Group as={Col} controlId="formGroupFname">
                                            <Form.Label className="login-label">First Name</Form.Label>
                                            <Form.Control
                                                required
                                                placeholder={profile.fname}
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
                                                placeholder={profile.lname}
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
                                                placeholder={profile.contact}
                                                name="contact"
                                                value={contact}
                                                onChange={e => setcontact(e.target.value)}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid contact number.
                                        </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                    {/* ADDRESS */}
                                    <Form.Group controlId="formGroupAddress">
                                        <Form.Label className="login-label">Address</Form.Label>
                                        <Form.Control
                                            required
                                            as="textarea"
                                            rows={3}
                                            placeholder={profile.address}
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
                                            placeholder={profile.postalCode}
                                            name="postalCode"
                                            value={postalCode}
                                            onChange={e => setpostalCode(e.target.value)}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please provide a valid postal code.
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <div className="profileButton">
                                        <Button
                                            type="submit"
                                            variant="outline-info"

                                        >Update Personal Info</Button>
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

