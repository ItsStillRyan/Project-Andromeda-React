import React from "react";
import { Row, Col, Container } from 'react-bootstrap'
import IndivListing from "../../components/IndiviListing";

//images
import logo from "../../images/logo.png"

export default class IndivItem extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="backListingContain">
                    <div className="listingContain">
                        <IndivListing />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}