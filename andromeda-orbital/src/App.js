import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

//importing pages
import NavbarMain from './commons/navbar'
import FooterMain from './commons/footer'


function App() {
    return (
        <div>
            <Router>
                <NavbarMain />
                <Switch>
                </Switch>
                <FooterMain />
            </Router>
        </div>
    )
}

export default App;
