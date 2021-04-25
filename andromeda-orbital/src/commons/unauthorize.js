import React from "react";
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Unauthorized extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div id="unauthorized-section">
                    <Row>
                        <Col>
                            <p id="unauthorizedTitle">Unauthorized Access</p>
                            <p>Try Logging in again.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>If the problem persists, please let our Administrators know!</p>
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col>
                            <div id="success-buttonCluster">

                                <Link to="/">
                                    <Button variant="outline-info">Log in</Button>
                                </Link>

                                <Link to="/">
                                    <Button variant="outline-warning">Back to Homepage</Button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        )
    }
}