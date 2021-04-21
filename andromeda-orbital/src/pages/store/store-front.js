import React from "react";
import {Row, Col} from 'react-bootstrap'
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
                            <img src={logo} className="logo-img" alt="androLogo"/>
                        </div>
                    </Col>

                    <Col className="show-col">
                        <div className="title-section">
                            <p >Andromeda Orbital Store</p>
                        </div>
                    </Col>
                </Row>

                <Row className="bottom-section justify-content-md-end">
                    <Col xs="3"className="filter-section">
                        <div id="userLevelFilter">
                            <p className="filterTitle">User Level</p>
                            <ul>
                                <li>Beginner</li>
                                <li>Intermediate</li>
                                <li>Advance</li>
                            </ul>
                        </div>
                        <div id="brandFilter">
                            <p className="filterTitle">Brand</p>
                            <p>Orion</p>
                            <p>Celestron</p>
                            <p>Meade</p>
                        </div>
                        <div id="imagingFilter">
                            <p className="filterTitle">Best for Imaging</p>
                        </div>

                    </Col>
                    <Col xs="9" className="listing-section">
                        <MainListing />
                    </Col>
                   
                </Row>
            </React.Fragment>
        )
    }
}