import React from "react";
import axios from "axios";
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import config from "../../config";
import { Link } from 'react-router-dom'


const BASE_URL = config.BASE_URL
const userid = localStorage.getItem("id")
export default class Cart extends React.Component {

    state = {
        cart: [],
        quantity: ""
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

    calculateTotalPrice = () => {

        let accum = []
        for (let c of this.state.cart) {
            accum.push(c.telescope.price * c.quantity)
        }
        return accum.reduce(function (a, b) { return a + b }, 0)
    }

    currentQuantity = () => {
        let accum = []
        for (let q of this.stat.cart) {
            accum.push(q.quantity)
        }
        return accum
    }

    removeItem = async (telescopeid) => {
        const remove = await axios.get(BASE_URL + "/api/cart/" + userid + "/" + telescopeid + "/remove")
        setTimeout(window.location.reload(), 3000)
    }

    updateQuantity = async (telescopeid) => {
        const update = await axios.post(BASE_URL + "/api/cart/" + userid + "/" + telescopeid + "/quantity" + "/update", {
            "newQuantity": this.state.quantity
        })
        setTimeout(window.location.reload(), 3000)
        return update

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
                        <Button
                            variant="outline-warning"
                            size="sm"
                            onClick={() => { this.removeItem(c.telescope.id) }}
                        >
                            <i className="far fa-trash-alt"></i>
                        </Button>

                    </Col>
                    <Col xs={2} className="cartQuantity">

                        <Form>
                            <Form.Group>
                                <Form.Label>Quantity:</Form.Label>
                                <Form.Control
                                    placeholder={c.quantity}
                                    value={this.state.quantity}
                                    name="quantity"
                                    onChange={(e) => {
                                        this.setState({
                                            [e.target.name]: e.target.value
                                        })
                                    }}
                                />
                            </Form.Group>
                            <Button
                                variant="outline-warning"
                                size="sm"
                                onClick={() => { this.updateQuantity(c.telescope.id) }}
                            >
                                Update
                            </Button>
                        </Form>

                    </Col>
                </Row>
            )
        }
        return accum
    }

    render() {
        return (
            <React.Fragment>
                <div id="cart-section-whole">
                    <h1 id="cartTitle">Cart</h1>
                    <Row>
                        <Col>
                            {this.renderCart()}
                        </Col>
                        <Col xs={2} id="checkout-section">
                            <p>Total Price: <br /> SGD ${this.calculateTotalPrice()}</p>
                            <Link to="/confirmOrders">
                                <Button variant="outline-success">Check out</Button>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        )
    }
}