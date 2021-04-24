import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useParams, Link } from "react-router-dom"
import config from "../../config";

const BASE_URL = config.BASE_URL
const userid = localStorage.getItem("id")
const recentOrderId = localStorage.getItem("recentOrder")

export default function SuccessURL() {

    useEffect(async () => {
        await axios.post(BASE_URL + "/api/order/" + recentOrderId + "/status", {
            "status_id": "2"
        })
        await axios.get(BASE_URL + "/api/cart/" + userid + "/removeMain")
    }, [])

    if (!userid) {
        window.location.assign("/unauthorize")
    }


    const shippingNumGen = (length) => {
        let result = [];
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result.push(characters.charAt(Math.floor(Math.random() *
                charactersLength)));
        }
        return result.join('');
    }


    return (
        <React.Fragment>
            
            <div id="success-section">
                <div>
                    <p id="successTitle">Order Successful!</p>
                    <p>Your Shipping number is: <br /><span id="successShipNum">{shippingNumGen(40)}</span></p>
                </div>
                <div id="success-buttonCluster">

                    <Link to={"/profile/" + userid}>
                        <Button variant="outline-success">Check your Order</Button>
                    </Link>

                    <Link to="/">
                        <Button variant="outline-warning">Back to Homepage</Button>
                    </Link>

                </div>
            </div>

        </React.Fragment>
    )
}