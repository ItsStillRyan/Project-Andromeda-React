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
                        <MDBCol md="6" className="show-col text-center text-md-center">
                            <h4 className="title gitCol">Find This Project on Github</h4>
                            <a className="gitIcon" href="https://github.com/ItsStillRyan/Project-Pegasus-React"><i className="fab fa-github"></i></a>
                        </MDBCol>

                        <MDBCol md="3" className="show-col cateList">
                            <h5 className="title">Categories</h5>
                            <ul>
                                <li className="list-unstyled">
                                    
                                        <a href={pegasusURL +"/galaxies"}>Galaxies</a>
                               
                                </li>
                                <li className="list-unstyled">
                                    <Link to="/starcluster">
                                        <a>Star Clusters</a>
                                    </Link>
                                </li>
                                <li className="list-unstyled">
                                    <Link to="/planetary">
                                        <a>Planetary</a>
                                    </Link>
                                </li>
                                <li className="list-unstyled">
                                    <Link to="/nebulae">
                                        <a>Nebulae</a>
                                    </Link>
                                </li>
                                <li className="list-unstyled">
                                    <Link to="/spacecraft">
                                        <a>Space Craft</a>
                                    </Link>
                                </li>
                                <li className="list-unstyled">
                                    <Link to="/others">
                                        <a>Others</a>
                                    </Link>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol md="3" className="show-col cateList">
                            <h5 className="title">Help</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <Link to="/gettingstarted">
                                        <a>Getting Started</a>
                                    </Link>
                                </li>
                            </ul>
                           <h5 className="title">Uploads</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <Link to="/uploads">
                                        <a>Upload a picture</a>
                                    </Link>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="#">RyanT</a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </React.Fragment >
    )
}