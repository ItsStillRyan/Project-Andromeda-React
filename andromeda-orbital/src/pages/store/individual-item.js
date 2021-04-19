import React from "react";
import { Row, Col, Container } from 'react-bootstrap'
import IndivListing from "../../components/IndiviListing";

//images
import logo from "../../images/logo.png"

export default class IndivItem extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container>
                    <IndivListing />
                </Container>
            </React.Fragment>
        )
    }
}