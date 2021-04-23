import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useParams, Link } from "react-router-dom"
import config from "../../config";

const BASE_URL = config.BASE_URL
const userid = localStorage.getItem("id")


export default class SuccessURL extends React.Component {

    state = {
        cart: [],
        orders: []

    }

    async componentDidMount() {
        // const response = await axios.get(BASE_URL + "/api/cart/" + userid)
        // this.setState({
        //     cart: response.data
        // })
        
        await axios.get(BASE_URL + "/api/order/" + this.state.orderId + "/status", {
            "status_id": "2"
        })
    }

    removeItem = async (telescopeid) => {
        const remove = await axios.get(BASE_URL + "/api/cart/" + userid + "/" + telescopeid + "/removeMain")
    }

    // clearCart = () => {
    //     let accum = []
    //     for (let c of this.state.cart) {
    //         accum.push(this.removeItem(c.telescope.id))
    //     }
    //     return accum
    // }

    shippingNumGen = (length) => {
        let result = [];
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result.push(characters.charAt(Math.floor(Math.random() *
                charactersLength)));
        }
        return result.join('');
    }

    // orderId = async () => {
    //     const response2 = await axios.get(BASE_URL + "/api/order/" + userid)
    //     this.setState({
    //         orders: response2.data
    //     })
    //     let accum = []
    //     for (let o of this.state.order) {
    //         accum.push(o.id)
    //     }
    //     return accum
    // }

    



    render() {
        return (
            <React.Fragment>
                {/* {this.clearCart()} */}
                {/* {this.orderId()} */}
                <div id="success-section">
                    <div>
                        <p id="successTitle">Order Successful!</p>
                        <p>Your Shipping number is: <br /><span id="successShipNum">{this.shippingNumGen(40)}</span></p>
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