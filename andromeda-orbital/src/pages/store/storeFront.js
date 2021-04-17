import React from "react";
import { Carousel, } from 'react-bootstrap'
import MainListing from "../../components/MainListing";

//images
import logo from "../../images/logo.png"

export default class StoreFront extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* <Row>
                        <Col>
                            
                        </Col>
                        <Col>
                            
                        </Col>
                    </Row> */}
                <div className="top-section">
                    <aside className="logo-section">
                        <img src={logo} className="logo-img" />
                    </aside>
                    <section className="title-section">
                        <p >Andromeda Orbital Store</p>
                    </section>
                </div>
                <div>
                    <aside className="filter-section">
                        Filters
                </aside>
                    
                        <MainListing />
                    
                </div>

            </React.Fragment>
        )
    }
}