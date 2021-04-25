import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import config from "../../config";

const BASE_URL = config.BASE_URL
const userid = localStorage.getItem("id")
const recentOrderId = localStorage.getItem("recentOrder")

export default function SuccessURL() {

    const [cart, setCart] = useState([])

    useEffect(() => {
        async function fetchData() {
            const cart = await axios.get(BASE_URL + "/api/cart/" + userid)
            setCart(cart.data)

            await axios.post(BASE_URL + "/api/order/" + recentOrderId + "/status", {
                "status_id": "2"
            })
        }
        fetchData()
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

    const clearCart = async (telescopeid) => {
        await axios.get(BASE_URL + "/api/cart/" + userid + "/" + telescopeid + "/removeMain")
        setTimeout(window.location.reload(), 1000)
    }

    if (!userid) {
        window.location.assign("/unauthorize")

    } else {
        return (
            <React.Fragment>
                {cart.map(c => (clearCart(c.telescope_id)))}
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
}