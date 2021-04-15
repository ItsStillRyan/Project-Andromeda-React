import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

//importing pages
import NavbarMain from './commons/navbar'
import FooterMain from './commons/footer'
import StoreFront from './pages/store/storeFront'


function App() {
    return (
        <div>
            <Router>
                <NavbarMain />
                <Switch>
                    <Route exact path="/" component={StoreFront}/>
                </Switch>
                <FooterMain />
            </Router>
        </div>
    )
}

export default App;
