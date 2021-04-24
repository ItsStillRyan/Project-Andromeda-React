import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Card, CardDeck, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import config from "../../config";

//images
import logo from "../../images/logo.png"


const BASE_URL = config.BASE_URL

export default function StoreFront() {

    const [product, setProduct] = useState([])
    const [search, setSearch] = useState("")


    useEffect(async () => {
        const response = await axios.get(BASE_URL + "/api/telescope")
        setProduct(response.data)
    }, [])

    return (
        <React.Fragment>
            <Row className="top-section">

                <Col xs={3} className="show-col" >
                    <div className="logo-section">
                        <img src={logo} className="logo-img" alt="androLogo" />
                    </div>
                </Col>

                <Col className="show-col">
                    <div className="title-section">
                        <p >Andromeda Orbital Store</p>
                    </div>
                </Col>
            </Row>

            <Row className="bottom-section justify-content-md-end">
                <Col xs={2} className="filter-section">
                    <div id="searchBar">
                        <Form>
                            <Form.Control
                                type="text"
                                name="search"
                                placeholder="Search"
                                value=""
                                onChange={e => setSearch(e.target.value)}
                            />
                        </Form>
                    </div>
                    <div id="userLevelFilter">
                        <p className="filterTitle">User Level</p>
                        <ul>
                            <li><Button
                                variant="outline-light"

                            >Beginner</Button></li>
                            <li>Intermediate</li>
                            <li>Advance</li>
                        </ul>
                    </div>
                    <div id="brandFilter">
                        <p className="filterTitle">Brand</p>
                        <ul>
                            <li>Orion</li>
                            <li>Celestron</li>
                            <li>Meade</li>
                        </ul>
                    </div>
                    <div id="imagingFilter">
                        <p className="filterTitle">Best for Imaging</p>
                        <ul>
                            <li>Lunar & Planetary</li>
                            <li>Deep Sky</li>
                            <li>Solar, lunar, planetary & Messier objects</li>
                        </ul>
                    </div>

                </Col>
                <Col xs={10} className="listing-section">
                    <CardDeck>
                        {product.map(p => (
                            <Link to={`/` + p.id}>
                                <Card className="cardSize">
                                    <Card.Img variant="top" src={p.image_url} />
                                    <Card.Body>
                                        <Card.Title>{p.name}</Card.Title>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">SGD ${p.price}</small>
                                    </Card.Footer>
                                </Card>
                            </Link>
                        ))}
                    </CardDeck>
                </Col>
            </Row>
        </React.Fragment>
    )
}