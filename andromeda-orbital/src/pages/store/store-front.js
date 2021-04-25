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
    const [searchButtons, setSearchButtons] = useState("")
    const [display, setDisplay] = useState("")


    const ALL = ""
    const BEGINNER = "Beginner"
    const INTERMEDIATE = "Intermediate"
    const ADVANCE = "Advanced"



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