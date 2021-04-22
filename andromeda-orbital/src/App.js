import React, { useEffect } from 'react'
import axios from "axios";
import config from "./config";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
import SuccessURL from './pages/stripe/success'
import ErrorURL from './pages/stripe/error'

function App() {

    useEffect(() => {
        setInterval(async () => {
            const response = await axios.post(
                config.BASE_URL + "/api/users/refresh",
                {
                    refreshToken: localStorage.getItem("refreshToken")
                }
            );
            localStorage.setItem("accessToken", response.data.accessToken);
        }, config.REFRESH_TOKEN_INTERVAL);
    });

 



    return (
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
                            <Route exact path="/cart" component={Cart} />
                            <Route exact path="/confirmOrders" component={ConfirmOrders} />
                            <Route exact path="/success" component={SuccessURL} />
                            <Route exact path="/error" component={ErrorURL} />
                            {/* individual item */}
                            <Route exact path="/:id" component={IndivItem} />
                        </Switch>
                    </div>
                </div>
            </div>
            <FooterMain />
        </Router>

    )
}

export default App;
