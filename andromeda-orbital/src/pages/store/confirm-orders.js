import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useParams } from "react-router-dom"
import config from "../../config";
import { Link } from 'react-router-dom'


const BASE_URL = config.BASE_URL
const userid = localStorage.getItem("id")


export default class CartConfirm extends React.Component {

    state = {
        cart: [],
        shipping: ""
    }

    async componentDidMount() {
        const response = await axios.get(BASE_URL + "/api/cart/" + userid)
        this.setState({
            cart: response.data,
        })
        if (!userid) {
            window.location.assign("/unauthorize")
        }

    }

    renderCart = () => {
        let accum = []
        for (let c of this.state.cart) {
            accum.push(
                <Row className="indivCart" >
                    <Col xs={2} className="cartImg">
                        <img src={c.telescope.image_url} />
                    </Col>
                    <Col xs={6} className="cartName">
                        <p>{c.telescope.name}</p>
                    </Col>
                    <Col xs={2} className="cartPrice">
                        <p>SGD ${c.telescope.price}</p>
                    </Col>
                    <Col xs={2} className="cartQuantity">
                        <p>Quantity: {c.quantity}</p>
                    </Col>
                </Row>
            )
        }
        return accum
    }

    //creating order + sending to checkout page
    checkoutCluster = async () => {
        const response = await axios.post(BASE_URL + "/api/order/createOrder", {
            'status_id': "1",
            'shipping_id': this.state.shipping,
            'users_id': localStorage.getItem("id")
        }) 
        localStorage.setItem("recentOrder", response.data.id)

        window.location.assign(BASE_URL + "/api/checkout/" + userid)
    }


    render() {
        return (
            <React.Fragment>
                <div id="confirmorder-section-whole">
                    <h1 id="cartTitle">Confirm Orders</h1>
                    <Row>
                        <Col xs={8}>
                            {this.renderCart()}
                        </Col>
                        <Col xs={2}>
                        </Col>
                        <Col>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Shipping</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="shipping"
                                        value={this.state.shipping}
                                        onChange={(e) => {
                                            this.setState({
                                                [e.target.name]: e.target.value
                                            })
                                        }}
                                    >
                                        <option value="0">--Select--</option>
                                        <option value="1" selected>SingPost</option>
                                        <option value="2">Seller's Shipping</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>

                            <Button 
                            variant="outline-success"
                            onClick={()=>{this.checkoutCluster()}}
                            >
                            Checkout
                            </Button>

                            <Link to="/cart">
                                <Button variant="outline-warning" size="sm">Back</Button>
                            </Link>

                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        )
    }

}