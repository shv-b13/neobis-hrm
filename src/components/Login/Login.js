import React, {Component} from 'react';
import './login.css';
import {api_base} from "../../App";
import {withRouter} from "react-router-dom";

class LogIn extends Component {

    handleSubmit = async (event) => {
        event.preventDefault();
        const email = document.getElementById('LogEmail').value;
        const phone = document.getElementById('LogPhone').value;
        const loginData = {
            username: email,
            password: phone,
        };
        const req = await fetch(`${api_base}/application/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData),
        });
        const res = await req.json();
        if (res.token) {
            localStorage.setItem('token', res.token);
            this.props.history.push(`time-slots`);
        }
    };

    render() {
        return (
            <div className="authContainer">
                <div className="head"><h3 className="head-h3">Авторизация</h3></div>
                <form onSubmit={this.handleSubmit}>
                    <input id="LogEmail"
                           className="LogEmail"
                           type="LogEmail"
                           name="Email"
                           required
                           placeholder="логин"
                    />
                    <input id="LogPhone"
                           className="LogPhone"
                           type="tel"
                           name="пароль"
                           required
                           placeholder="пароль"
                    />
                    <button className="logIn">Войти</button>
                </form>
            </div>
        )
    }

}

export default withRouter(LogIn);