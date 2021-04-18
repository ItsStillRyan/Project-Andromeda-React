import React from "react";
import { Carousel, Row, Col, Container } from 'react-bootstrap'
import IndivListing from "../../components/IndiviListing";

//images
import logo from "../../images/logo.png"

export default class IndivItem extends React.Component {
    render() {
        return (
            <React.Fragment>
                <IndivListing />
            </React.Fragment>
        )
    }
}