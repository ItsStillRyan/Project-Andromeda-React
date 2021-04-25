import React from "react";
import { Link } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../main.css'

//Pegasus Link
const pegasusURL = "https://3000-tomato-unicorn-cygml9j4.ws-us03.gitpod.io"

export default function FooterMain(props) {
    return (
        <React.Fragment>
            <MDBFooter color="elegant-color-dark" className="font-small pt-4">
                <MDBContainer fluid className="footerWholeSize ">
                    <MDBRow >
                        <MDBCol className="show-col text-center text-md-center">
                            <h4 className="title gitCol">Find This Project on Github</h4>
                            <a className="gitIcon" href="https://github.com/ItsStillRyan/Project-Andromeda-React"><i className="fab fa-github"></i></a>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <p>RyanT</p>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </React.Fragment >
    )
}