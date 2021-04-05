import React, { useState } from 'react';
import axios from 'axios';
import './index.css';
import { Redirect } from 'react-router';
import Cookies from 'universal-cookie';
import address from '../../address/address';

const Auth = ({ isAthenticated, authHandler }) => {
    const [loginFormShow, setLoginFormShow] = useState(true);
    const cookie = new Cookies();

    const loginHandler = async (event) => {
        event.preventDefault();
        const loginData = {
            username: event.target[0].value,
            password: event.target[1].value,
        };
        try {
            const response = await axios.post(
                `${address}/users/login/`,
                loginData
            );
            cookie.set('token', response.data.token);
            authHandler();
        } catch (err) {
            return alert(err.response.data.message);
        }
    };

    const signupHandler = async (event) => {
        event.preventDefault();
        const signupData = {
            username: event.target[0].value,
            email: event.target[1].value,
            password: event.target[2].value,
        };
        try {
            const response = await axios.post(
                `${address}/users/signup/`,
                signupData
            );
            cookie.set('token', response.data.token);
            authHandler();
        } catch (err) {
            return alert(err.response.data.message);
        }
    };

    if (isAthenticated) {
        return <Redirect to="/todolist" />;
    } else {
        return (
            <div className="frame">
                <header>Login or signUp page</header>
                <div className="box">
                    <div className="LoginSignUp">
                        <h1
                            onClick={() => setLoginFormShow(true)}
                            className={loginFormShow ? 'activeLogin' : 'toggle'}
                        >
                            Login
                        </h1>
                        <h1
                            onClick={() => setLoginFormShow(false)}
                            className={
                                loginFormShow ? 'toggle' : 'activeSignup'
                            }
                        >
                            SignUp
                        </h1>
                    </div>
                    {loginFormShow ? (
                        <form onSubmit={loginHandler} className="AuthForm">
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
                        <form onSubmit={signupHandler} className="AuthForm">
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
};
export default Auth;
