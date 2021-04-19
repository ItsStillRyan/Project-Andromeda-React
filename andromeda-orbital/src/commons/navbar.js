import React from "react";
import { Link } from 'react-router-dom'
//bootstraps
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
//import images
import logo from '../images/logo-small.png'
import logoMain from '../images/logo.png'
//css
import '../main.css'

//Pegasus Link
const pegasusURL = "https://3000-tomato-unicorn-cygml9j4.ws-us03.gitpod.io/"

export default class NavbarMain extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Navbar expand="lg" bg="dark" varient="dark">

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                            <Nav.Link>
                                <a href={pegasusURL}>
                                    <img
                                        src={logo}
                                        width="60"
                                        height="60"
                                        className="d-inline-block align-top"
                                        alt="Andromeda Logo"
                                    />
                                </a>
                            </Nav.Link>

                            <Navbar.Text>
                                <p className="nav-divider ml-4 mr-4">|</p>
                            </Navbar.Text>

                            <Nav.Link>
                                <Link to="/">
                                    <img
                                        src={logoMain}
                                        width="60"
                                        height="60"
                                        className="d-inline-block align-top"
                                        alt="Andromeda Logo"
                                    />
                                </Link>
                            </Nav.Link>

                            <Nav.Link>
                                <Link to="/">
                                    <p className="navLink ml-3">Store</p>
                                </Link>
                            </Nav.Link>

                        </Nav>
                        <Nav className="">
                            <Nav.Link>
                                <Link to="/login">
                                    <p className="navLink2 ml-5">
                                        <i className="fas fa-chevron-right ml-2 mr-2"></i>
                                            Login
                                        <i className="fas fa-chevron-left mr-2 ml-2"></i>
                                    </p>
                                </Link>
                            </Nav.Link>
                            {/* <Nav.Link>
                                <i className="fas fa-shopping-cart navLinkIcon  ml-5"></i>
                            </Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment >
        )
    }
}