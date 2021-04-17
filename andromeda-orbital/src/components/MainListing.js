import React from "react";
import axios from "axios";
import config from "../../src/config";

const BASE_URL = config.BASE_URL

export default class MainListing extends React.Component {
    state = {
        products: []
    }


    async componentDidMount() {
        const response = await axios.get(BASE_URL + "/api/telescope")
        console.log(response.data)
        this.setState({
            products: response.data
        })

    }


    renderProducts = () => {
        let accum = []
        for (let s of this.state.products) {
            accum.push(
                <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 cardCol">
                    <div className="card rounded shadow-sm border-4 cardSize2">
                        <div className="card-body cardSize">
                            <img src={s.image_url} alt="" className="img-fluid d-block mx-auto mb-3"
                                className="product-img" />

                            <h5> <a href="/" className="text-dark">{s.name}</a></h5>

                            <p className="small text-muted font-italic">SGD ${s.price}</p>
                        </div>
                    </div>
                </div>
            )
        }
        return accum
    }

    render() {
        return (
            <React.Fragment>
                <div className="container py-5">
                    <div className="row pb-5 mb-4">
                        {this.renderProducts()}
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

