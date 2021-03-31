import React, { Component } from 'react';
import axios from 'axios';
import './index.css';
import { Redirect } from 'react-router';
import Cookies from 'universal-cookie';
import address from '../../address/address';
class Auth extends Component {
    state = { loginFormShow: true };
    cookie = new Cookies();
    //Event handlers
    loginHandler = async (event) => {
        event.preventDefault();
        const loginData = {
            username: event.target[0].value,
            password: event.target[1].value,
        };
        try {
            const response = await axios.post(
                address + '/users/login/',
                loginData
            );
            this.cookie.set('token', response.data.token);
            this.props.authHandler();
        } catch (err) {
            return alert(err.response.data.message);
        }
    };
    signupHandler = async (event) => {
        event.preventDefault();
        const signupData = {
            username: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value,
        };
        try {
            const response = await axios.post(
                address + '/users/signup/',
                signupData
            );
            this.cookie.set('token', response.data.token);
            this.props.authHandler();
        } catch (err) {
            return alert(err.response.data.message);
        }
    };
    render() {
        if (this.props.isAthenticated) {
            return <Redirect to="/todolist" />;
        }
        return (
            <div className="frame">
                <header>Login or signUp page</header>
                <div className="box">
                    <div className="LoginSignUp">
                        <h1
                            onClick={() =>
                                this.setState({ loginFormShow: true })
                            }
                            className={
                                this.state.loginFormShow
                                    ? 'activeLogin'
                                    : 'toggle'
                            }
                        >
                            Login
                        </h1>
                        <h1
                            onClick={() =>
                                this.setState({ loginFormShow: false })
                            }
                            className={
                                this.state.loginFormShow
                                    ? 'toggle'
                                    : 'activeSignup'
                            }
                        >
                            SignUp
                        </h1>
                    </div>
                    {this.state.loginFormShow ? (
                        <form onSubmit={this.loginHandler} className="AuthForm">
                            <input
                                className="inputOfAuth"
                                type="text"
                                placeholder="username"
                            />
                            <input
                                className="inputOfAuth"
                                type="password"
                                placeholder="password"
                            />
                            <button className="buttonOfAuth">Login</button>
                        </form>
                    ) : (
                        <form
                            onSubmit={this.signupHandler}
                            className="AuthForm"
                        >
                            <input
                                className="inputOfAuth"
                                type="text"
                                placeholder="username"
                            />
                            <input
                                className="inputOfAuth"
                                type="email"
                                placeholder="email"
                            />
                            <input
                                className="inputOfAuth"
                                type="password"
                                placeholder="password"
                            />
                            <button className="buttonOfAuth">Register</button>
                        </form>
                    )}
                </div>
            </div>
        );
    }
}
export default Auth;
