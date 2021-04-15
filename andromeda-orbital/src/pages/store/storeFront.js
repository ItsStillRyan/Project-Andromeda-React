import React from "react";
import MainListing from "../../components/MainListing";

export default class StoreFront extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Products</h1>
                <MainListing />
            </React.Fragment>
        )
    }
}