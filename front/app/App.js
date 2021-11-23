import React from 'react'
import MainPage from '../pages/MainPage/MainPage'
import BookPage from '../pages/BookPage/BookPage'
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage'
import LoginPage from '../pages/LoginPage/LoginPage'

import {
    Switch,
    Route,
} from "react-router-dom";

class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path='/' component={MainPage} />
                    <Route path='/book/:id' component={BookPage} />
                    <Route path='/login' component={LoginPage} />
                    <Route path='/registration' component={RegistrationPage} />
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;