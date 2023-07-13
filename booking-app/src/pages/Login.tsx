import React, { Component, useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import './css/Login.css';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, ACCESS_TOKEN } from '../constants';
import { login } from '../util/APIUtils';
import { Link, redirect } from 'react-router-dom'
import fbLogo from './img/fb-logo.png';
import googleLogo from './img/google-logo.png';

export default function Login(props: any) {
    if (props.authenticated) {
        return (<div>Hello</div>);
    }

    return (
        <div className="login-container">
            <div className="login-content">
                <h1 className="login-title">Login to booking</h1>
                <SocialLogin />
                <div className="or-separator">
                    <span className="or-text">OR</span>
                </div>
                <LoginForm {...props} />
                <span className="signup-link">New user? <Link to="/signup">Sign up!</Link></span>
            </div>
        </div>
    );
}

const SocialLogin = () => {

    return (
        <div className="social-login">
            <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                <img src={googleLogo} alt="Google" /> Log in with Google</a>
            <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
                <img src={fbLogo} alt="Facebook" /> Log in with Facebook</a>
        </div>
    );
}



const LoginForm = (props: any, state: any) => {
    const [inputName, inputValue] = useState("");

    const handleInputChange = (event: any) => {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        inputValue(inputValue);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();

        const loginRequest = Object.assign({}, state);

        login(loginRequest)
            .then(response => {
                localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                props.history.push("/");
            }).catch(error => {
                // alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-item">
                <input type="email" name="email"
                    className="form-control" placeholder="Email"
                    value={state.email} onChange={handleInputChange} required />
            </div>
            <div className="form-item">
                <input type="password" name="password"
                    className="form-control" placeholder="Password"
                    value={state.password} onChange={handleInputChange} required />
            </div>
            <div className="form-item">
                <button type="submit" className="btn btn-block btn-primary">Login</button>
            </div>
        </form>
    );
}
function state(arg0: {}, state: any) {
    throw new Error('Function not implemented.');
}

