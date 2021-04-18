import React from "react";
import axios from "axios";
import config from "../../src/config";
import { Row, Col, Container, Card, CardDeck } from 'react-bootstrap'
import { useParams } from "react-router-dom";

const BASE_URL = config.BASE_URL

export default class IndivListing extends React.Component {


    state = {
        products: [],
        name: "",
        description: "",
        stock: "",
        price: "",
        weight: "",
        userLevel: "",
        imagingType: "",
        opticalDesign: "",
        apertureRange: "",
        fratioRange: "",
        category: "",
        brand: "",
        image_url: ""

    }


    async componentDidMount() {
        const response = await axios.get(BASE_URL + "/api/telescope/" + this.props.match.params.id + "/detailed")
        console.log(this.props.match.params.id)
        console.log(response.data)
        // this.setState({
        //     products: response.data,
        //     name: response.data.telescope,
        //     description: "",
        //     stock: "",
        //     price: "",
        //     weight: "",
        //     userLevel: "",
        //     imagingType: "",
        //     opticalDesign: "",
        //     apertureRange: "",
        //     fratioRange: "",
        //     category: "",
        //     brand: "",
        //     image_url: ""
        // })

    }


    // renderProducts = () => {
    //     let accum = []
    //     for (let s of this.state.products) {
    //         accum.push(
    //             <Col>
    //                 <Card className="cardSize">
    //                     <Card.Img variant="top" src={s.image_url} />
    //                     <Card.Body>
    //                         <Card.Title>{s.name}</Card.Title>
    //                     </Card.Body>
    //                     <Card.Footer>
    //                         <small className="text-muted">SGD ${s.price}</small>
    //                     </Card.Footer>
    //                 </Card>
    //             </Col>
    //         )
    //     }
    //     return accum
    // }

    render() {
        return (
            <React.Fragment>
                <h1>test</h1>
            </React.Fragment >
        )
    }
}

