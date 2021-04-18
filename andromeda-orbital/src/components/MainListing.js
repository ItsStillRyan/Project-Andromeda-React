import React from "react";
import axios from "axios";
import config from "../../src/config";
import { Row, Col, Container, Card, CardDeck } from 'react-bootstrap'

const BASE_URL = config.BASE_URL

export default class MainListing extends React.Component {
    state = {
        products: []
    }


    async componentDidMount() {
        const response = await axios.get(BASE_URL + "/api/telescope")
        this.setState({
            products: response.data
        })

    }


    renderProducts = () => {
        let accum = []
        for (let s of this.state.products) {
            accum.push(
                <Col>
                    <Card className="cardSize">
                        <Card.Img variant="top" src={s.image_url} />
                        <Card.Body>
                            <Card.Title>{s.name}</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">SGD ${s.price}</small>
                        </Card.Footer>
                    </Card>
                </Col>
            )
        }
        return accum
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    <CardDeck>
                        {this.renderProducts()}
                    </CardDeck>
                </Row>
            </React.Fragment >
        )
    }
}

