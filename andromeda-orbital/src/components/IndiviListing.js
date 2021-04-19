import React from "react";
import axios from "axios";
import config from "../../src/config";
import { Row, Col, Container, Card, CardDeck } from 'react-bootstrap'
import { withRouter } from "react-router-dom";

const BASE_URL = config.BASE_URL

class IndivListing extends React.Component {
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
        const { match: { params } } = this.props;

        const response = await axios.get(BASE_URL + "/api/telescope/" + this.props.match.params.id + "/detailed")

        axios.get(`${BASE_URL}/api/telescope/${params.id}/detailed`)
            .then(({ data: products }) => {
                console.log('product', products);

                this.setState({
                    products: products,
                    name: products.name,
                    description: products.description,
                    stock: products.stock,
                    price: products.price,
                    weight: products.weight,
                    userLevel: products.userLevel,
                    imagingType: products.imagingType,
                    opticalDesign: products.opticalDesign,
                    apertureRange: products.apertureRange,
                    fratioRange: products.fratioRange,
                    category: products.category.name,
                    brand: products.brand.name,
                    image_url: products.image_url
                })
            });
    }

    render() {
        return (
            <React.Fragment>
                <img src={this.state.image_url}/>
            </React.Fragment>
        )
    }
}

export default withRouter(IndivListing)
