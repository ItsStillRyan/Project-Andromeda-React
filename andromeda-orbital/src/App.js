import React, { useEffect, useState } from 'react'
import axios from "axios";
import config from "./config";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Button, Modal, Form } from 'react-bootstrap'

//importing pages
import NavbarMain from './commons/navbar'
import FooterMain from './commons/footer'
import StoreFront from './pages/store/store-front'
import IndivItem from './pages/store/individual-item'
import Login from './pages/user/login'
import Register from './pages/user/register'
import Profile from './pages/user/profile'
import Cart from './pages/user/cart'
import ConfirmOrders from './pages/store/confirm-orders'
import Orders from './pages/user/order'
import UpdateProfile from './pages/user/updateProfile'
import UpdatePersonal from './pages/user/updatePersonal'
import Unauthorized from './commons/unauthorize'
import SuccessURL from './pages/stripe/success'
import ErrorURL from './pages/stripe/error'


const BASE_URL = config.BASE_URL
const userid = localStorage.getItem("id")
function App() {

    const [profile, setProfile] = useState({})
    const [password, setPassword] = useState("")
    const [validated, setValidated] = useState(false);


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    if (userid) {
        const firstTrigger = setInterval(() => setShow(true), 840000)
    }

    // const secondTrigger = setInterval(async () => {
    //         localStorage.clear()
    //         const logout = await axios.get(BASE_URL + "/api/users/logout")
    //     }, 850000)

    // if (show){
    //     clearInterval(secondTrigger)
    // }

    useEffect(() => {
        const profileFetch = async () => {
            const response = await axios.get(BASE_URL + "/api/users/profile/" + userid, {
                'headers': {
                    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
                }
            })
            setProfile(response.data)
        }
        profileFetch()

    }, [])


    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            event.stopPropagation();
            const response = await axios.post(BASE_URL + "/api/users/login", {
                'username': profile.username,
                'password': password
            })

            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
            localStorage.setItem('id', response.data.id)
            setShow(false)

        }
        setValidated(true);

    };

    const logoutClick = async () => {
        localStorage.clear()
        const logout = await axios.get(BASE_URL + "/api/users/logout")
    }





    return (
        <React.Fragment>
            <Modal show={show} centered static>
                <Modal.Header>
                    <Modal.Title>Hi, Captain. Are you still there?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                        <Form.Group controlId="formBasicUsername">
                            <Form.Label className="login-label2">Username</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter Username"
                                name="username"
                                value={profile.username}
                                readOnly
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid Username.
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="login-label2">Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid Password.
                        </Form.Control.Feedback>
                        </Form.Group>
                        <Button
                            type="submit"
                            variant="outline-info"
                        >Still Shopping</Button>
                        <Button variant="outline-danger"
                            onClick={logoutClick}
                            href="/">Log me out</Button>
                    </Form>
                    <hr/>
                    Please enter your password to continue shopping!
                    <br/>
                    You will be automatically logged out in 60 seconds
                </Modal.Body>
            </Modal>
            <Router>
                <NavbarMain />
                <div className="bodyT">
                    <div className="backgroundBody">

                        <div className="divContain">
                            <Switch>
                                <Route exact path="/" component={StoreFront} />
                                <Route exact path="/login" component={Login} />
                                <Route exact path="/register" component={Register} />
                                <Route exact path="/profile/:id" component={Profile} />
                                <Route exact path="/profile/:id/profileUpdate" component={UpdateProfile} />
                                <Route exact path="/profile/:id/personalUpdate" component={UpdatePersonal} />
                                <Route exact path="/cart" component={Cart} />
                                <Route exact path="/confirmOrders" component={ConfirmOrders} />
                                <Route exact path="/orders" component={Orders} />
                                <Route exact path="/success" component={SuccessURL} />
                                <Route exact path="/error" component={ErrorURL} />
                                <Route exact path="/unauthorize" component={Unauthorized} />
                                {/* individual item */}
                                <Route exact path="/:id" component={IndivItem} />
                            </Switch>
                        </div>
                    </div>
                </div>
                <FooterMain />
            </Router>
        </React.Fragment>
    )
}

export default App;
