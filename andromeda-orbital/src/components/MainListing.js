import React from "react";
import axios from "axios";
import config from "../../src/config";
import { Row, Col, Card, CardDeck } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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

        console.log(response.data)

    }


    renderProducts = () => {
        let accum = []
        for (let s of this.state.products) {
            accum.push(
                <Col>
                    <Link to={`/` + s.id}>
                        <Card className="cardSize">
                            <Card.Img variant="top" src={s.image_url} />
                            <Card.Body>
                                <Card.Title>{s.name}</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">SGD ${s.price}</small>
                            </Card.Footer>
                        </Card>
                    </Link>
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

