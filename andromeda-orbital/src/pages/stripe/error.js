import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useParams, Link } from "react-router-dom"
import config from "../../config";

const BASE_URL = config.BASE_URL
const userid = localStorage.getItem("id")


export default function ErrorURL() {

    if (!userid) {
        window.location.assign("/unauthorize")

    } else {
        return (
            <React.Fragment>
                <div id="error-section">
                    <div>
                        <p id="errorTitle">Order Unsuccessful!</p>
                        <p>Seems like the order didn't went through..</p>
                        <br />
                        <p>But don't worry! We've retained your shopping cart so you can go back and checkout again.</p>
                    </div>
                    <div>
                        <br />
                        <br />
                        <p>If the problem persists, please let our Administrators know!   <br />Sorry for the inconvience caused, Captain.</p>
                    </div>
                    <div id="success-buttonCluster">

                        <Link to={"/cart"}>
                            <Button variant="outline-info">Back to Cart</Button>
                        </Link>

                        <Link to="/">
                            <Button variant="outline-warning">Back to Homepage</Button>
                        </Link>

                    </div>
                </div>
            </React.Fragment>
        )
    }



}