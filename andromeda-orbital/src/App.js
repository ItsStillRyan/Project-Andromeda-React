import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

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
                <div className="divContain">
                    <Switch>
                        <Route exact path="/" component={StoreFront} />
                        <Route exact path="/test" component={IndivItem}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/profile" component={Profile}/>
                        <Route exact path="/cart" component={Cart}/>
                        
                    </Switch>
                </div>
            </div >
            <FooterMain />
        </Router>

    )
}

export default App;
