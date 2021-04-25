import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Card, CardDeck, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import config from "../../config";

//images
import logo from "../../images/logo.png"


const BASE_URL = config.BASE_URL

export default function Telescopes() {

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
            <div id="telescopesWrap" >
                <div id="telescopelist-Title">
                    <p>Telescopes</p>
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


                <Row className="justify-content-md-center">
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
            </div>
        </React.Fragment>
    )
}