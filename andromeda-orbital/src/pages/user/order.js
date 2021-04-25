import React from "react";
import axios from "axios";
import { Button, Row, Col, Table } from 'react-bootstrap'
import { Link } from "react-router-dom"
import config from "../../config";

const BASE_URL = config.BASE_URL
const userid = localStorage.getItem("id")

export default class Orders extends React.Component {

    state = {
        cart: [],
        orders: []
    }

    async componentDidMount() {
        const response = await axios.get(BASE_URL + "/api/order/" + userid)
        this.setState({
            orders: response.data
        })
        const response2 = await axios.get(BASE_URL + "/api/cart/" + userid)
        this.setState({
            cart: response2.data
        })
    }

    renderOrders = () => {
        let accum = []
        for (let o of this.state.orders) {
            accum.push(
                <tr>
                    <td>{o.orderDate}</td>
                    <td>{o.id}</td>
                    <td>{o.shipping.name}</td>
                    <td>{o.status.name}</td>
                </tr>
            )
        }
        return accum
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col xs={12}>
                        <div id="orderTable-section">
                            <Table Hover Striped>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Order Number</th>
                                        <th>Shipping Type</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderOrders()}
                                </tbody>
                            </Table>
                        </div>
                    </Col>

                    {/* <Col xs={2}>
                    </Col> */}
                </Row>

                <div id="orderButtonCluster">
                    <Row>
                        <Col>
                            <Link to={"/profile/" + userid}>
                                <Button variant="outline-warning">Back to Profile</Button>
                            </Link>
                        </Col>
                    </Row>
                </div>


            </React.Fragment>
        )
    }


}