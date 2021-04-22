import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useParams, Link } from "react-router-dom"
import config from "../../config";

const BASE_URL = config.BASE_URL
const userid = localStorage.getItem("id")


export default class SuccessURL extends React.Component {

    state = {
        cart: []

    }

    async componentDidMount() {
        const response = await axios.get(BASE_URL + "/api/cart/" + userid)
        this.setState({
            cart: response.data
        })
    }

    removeItem = async (telescopeid) => {
        const remove = await axios.get(BASE_URL + "/api/cart/" + userid + "/" + telescopeid + "/remove")
    }

    clearCart = () => {
        let accum = []
        for (let c of this.state.cart) {
            accum.push(this.removeItem(c.telescope.id))
        }
        return accum
    }


    render() {
        return (
            <React.Fragment>
                {this.clearCart()}
            </React.Fragment>
        )
    }

}