import React from "react";
import IndivListing from "../../components/IndiviListing";
export default class IndivItem extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="backListingContain">
                    <div className="listingContain">
                        <IndivListing />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}