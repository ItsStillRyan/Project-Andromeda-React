import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//importing pages
import NavbarMain from './commons/navbar'
import FooterMain from './commons/footer'
import StoreFront from './pages/store/storeFront'
import IndivItem from './pages/store/individual-item'
import Login from './pages/user/login'
import Register from './pages/user/register'
import Profile from './pages/user/profile'
import Cart from './pages/user/cart'

function App() {


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
