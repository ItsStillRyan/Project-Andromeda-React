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

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(BASE_URL + "/api/telescope")
            setProduct(response.data)
        }
        fetchData()
    }, [])


    return (
        <React.Fragment>
            <Row className="top-section ">
                <Col xs={3}>
                    <div className="logo-section">
                        <img src={logo} className="logo-img" alt="androLogo" />
                    </div>
                </Col>

                <Col xs={9} align="center">
                    <div className="title-section">
                        <p >Andromeda Orbital Station</p>
                    </div>
                </Col>
            </Row>
            <Row className="middle-section">
                <Col align="center">
                    <Link to="/telescopes">
                        <Button variant="outline-info">
                            Telescopes
                    </Button>
                    </Link>
                </Col >
                <Col align="center">
                    <Button disabled variant="outline-danger">
                        Cameras
                        <hr style={{ borderColor: "Orange" }}></hr>
                        Coming Soon
                    </Button >
                </Col>
                <Col align="center">
                    <Button disabled variant="outline-danger">
                        Filters
                        <hr style={{ borderColor: "Orange" }}></hr>
                        Coming Soon
                    </Button>
                </Col>
                <Col align="center">
                    <Button disabled variant="outline-danger">
                        Accessories
                        <hr style={{ borderColor: "Orange" }}></hr>
                        Coming Soon
                    </Button>
                </Col>
            </Row>

            <div id="productlist-Title">
                <p>Store</p>
            </div>

            <div id="searchBar">
                <Form>
                    <Form.Row className="justify-content-md-center">
                        <Col xs={9}>
                            <Form.Control
                                type="text"
                                name="search"
                                placeholder="Search"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                        </Col>
                    </Form.Row>
                </Form>
            </div>


            <Row className="bottom-section justify-content-md-end">
                <Col className="listing-section">
                    <CardDeck>
                        {product.filter(t =>
                            t.name.toLowerCase().includes(search.toLowerCase()))
                            .map(p => (
                                <Link to={`/` + p.id}>
                                    <Card className="cardSize">
                                        <Card.Img variant="top" src={p.image_url} />
                                        <Card.Body>
                                            <Card.Title>{p.name}</Card.Title>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="priceTag">SGD ${p.price}</small>
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