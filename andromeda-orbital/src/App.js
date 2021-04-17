import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

//importing pages
import NavbarMain from './commons/navbar'
import FooterMain from './commons/footer'
import StoreFront from './pages/store/storeFront'
import LoginFront from './pages/user/login'

function App() {
    return (

        <Router>
            <NavbarMain />
            <div className="bodyT">
                <div className="divContain">
                    <Switch>
                        <Route exact path="/" component={StoreFront} />
                        <Route exact path="/login" component={LoginFront}/>
                    </Switch>
                </div>
            </div >
            <FooterMain />
        </Router>

    )
}

export default App;
