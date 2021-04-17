import React from "react";
import { Carousel, Row, Col, Container } from 'react-bootstrap'
import MainListing from "../../components/MainListing";

//images
import logo from "../../images/logo.png"

export default class StoreFront extends React.Component {
    render() {
        return (
            <React.Fragment>
                
                <Row className="top-section">

                    <Col xs={3} className="show-col" >
                        <div className="logo-section">
                            <img src={logo} className="logo-img" />
                        </div>
                    </Col>

                    <Col className="show-col">
                        <div className="title-section">
                            <p >Andromeda Orbital Store</p>
                        </div>
                    </Col>
                </Row>

                <Row className="bottom-section justify-content-md-end">
                    <Col className="show-col">
                    </Col>
                    <Col lg="10" className="show-col">
                        <MainListing />
                    </Col>
                   
                </Row>
            </React.Fragment>
        )
    }
}