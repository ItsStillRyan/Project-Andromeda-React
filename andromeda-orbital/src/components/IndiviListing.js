import React from "react";
import axios from "axios";
import config from "../../src/config";
import { Row, Col, Container, Card, CardDeck, Button, Table } from 'react-bootstrap'
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

    calcShipping() {
        return Math.floor((Math.random() * 60) + 20);

    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    {/* image col */}
                    <Col xs={3}>
                        <div className="indivImgCol">
                            <img
                                src={this.state.image_url}
                            />
                        </div>
                    </Col>
                    {/* Quick details col */}
                    <Col>
                        <div className="indivQuickDetailsCol">
                            <p id="indivTitle">{this.state.name}</p>
                            <p className="indivSubDetailTitle">User Level: </p>
                            <p className="indivSubDetail">{this.state.userLevel}</p>
                            <p className="indivSubDetailTitle">Best for:</p>
                            <p className="indivSubDetail">{this.state.imagingType}</p>
                        </div>
                    </Col>
                    {/* add to cart/price col */}
                    <Col>
                        <div className="indivAddCartCol">
                            <div>
                                <p id="indivPrice">SGD${this.state.price}</p>
                            </div>
                            <div>
                                <p>+${this.calcShipping()} Shipping & Import Fees Deposit to Singapore</p>
                            </div>
                            <div className="h-divider2"></div>
                            <p>Order fufilled and sold by:</p>
                            <p id="indivStoreName">{this.state.brand} Official Store</p>
                            <div className="h-divider2"></div>
                            <div>

                                <div>
                                    <p>Stock Left: {this.state.stock}</p>
                                </div>
                                <div>
                                    <Button variant="outline-warning">Add to Cart</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* detailed description area */}
                <Row>
                    <Col>
                        <div className="indivFullDetailsSection">
                            <div id="indivFullSpecTitle">
                                <p>Full Specs:</p>
                            </div>
                            <div id="indivSpecDesc">
                                {this.state.description}
                            </div>
                            <div className="indivTableTd">
                                <Table striped hover size="sm">
                                    <tbody>
                                        <tr>
                                            <td><span className="indivTablelink">Imaging Type: </span>{this.state.imagingType}</td>
                                            <td><span className="indivTablelink">Optical Design: </span>{this.state.opticalDesign}</td>

                                        </tr>
                                        <tr>
                                            <td><span className="indivTablelink">Aperture: </span>{this.state.apertureRange}</td>
                                            <td><span className="indivTablelink">f/Ratio: </span>{this.state.fratioRange}</td>
                                        </tr>
                                        <tr>
                                            <td><span className="indivTablelink">Weight: </span>{this.state.weight}</td>
                                            <td><span className="indivTablelink">User Level: </span>{this.state.userLevel}</td>

                                        </tr>
                                        <tr>
                                            <td><span className="indivTablelink">Brand: </span>{this.state.brand}</td>
                                            <td><span className="indivTablelink">Category: </span>{this.state.category}</td>
                                        </tr>

                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </Col>
                </Row>

            </React.Fragment>
        )
    }
}

export default withRouter(IndivListing)
