import React from 'react'

import {login} from '../../api/authorization'

import './LoginPage.css'
import {Link} from "react-router-dom";
import {history} from "../../helpers/history";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        const {user} = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({submitted: true});
        if (this.state.user.username && this.state.user.password) {
            const response = await login(this.state.user.username, this.state.user.password)
        }
    }

    render() {

        const {user, submitted} = this.state;

        return (
            <div className="col-md-6 col-md-offset-3 jumbotron">
                <h1 className="display-4">Login</h1>

                <form name="form" id="submit" onSubmit={this.handleSubmit}>

                    <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={user.username}
                               onChange={this.handleChange}/>
                        {submitted && !user.username &&
                        <div className="help-block">Username is required</div>
                        }
                    </div>

                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={user.password}
                               onChange={this.handleChange}/>
                        {submitted && !user.password &&
                        <div className="help-block">Password is required</div>
                        }
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary">Log In</button>
                        <Link className="btn btn-link" to={"/registration"}>Register</Link>
                    </div>
                </form>

            </div>
        )
    }
}


export default LoginPage;