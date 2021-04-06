import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
//bootstraps
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
//import images
import logo from '../images/logo-small.png'
//css
import '../main.css'
//Pegasus Link
const pegasusURL = "https://3000-tomato-unicorn-cygml9j4.ws-us03.gitpod.io/"

export default class NavbarMain extends React.Component {

    async componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                <Navbar expand="lg" bg="dark" varient="dark">
                    <Navbar.Brand>
                    <a href="https://3000-tomato-unicorn-cygml9j4.ws-us03.gitpod.io/">
                            <img
                                src={logo}
                                width="60"
                                height="60"
                                className="d-inline-block align-top"
                                alt="Pegasus Logo"
                            />
                    </a>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="https://3000-tomato-unicorn-cygml9j4.ws-us03.gitpod.io/" >
                                    <p className="navLink mr-5">
                                            Back into the Index
                                    </p>
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Navbar.Text>
                                <p className="navLink ml-5">Welcome back:</p>
                            </Navbar.Text>
                            <Nav.Link>
                                <i className="fas fa-shopping-cart navLinkIcon  ml-5"></i>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment >
        )
    }
}