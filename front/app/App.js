import React from 'react'
import MainPage from '../pages/MainPage/MainPage'
import BookPage from '../pages/BookPage/BookPage'
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import { history } from "../helpers/history";

import {
    Switch,
    Route, Router,
} from "react-router-dom";

class App extends React.Component {

    constructor(props) {
        super(props);

        history.listen((location, action) => {

        })
    }

    render() {
        return (
            <React.Fragment>
                <Router history={history}>
                    <Switch>
                        <Route exact path='/main' component={MainPage} />
                        <Route path='/book/:id' component={BookPage} />
                        <Route path='/login' component={LoginPage} />
                        <Route path='/' component={RegistrationPage} />
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;