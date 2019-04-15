import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './login.css';
import {link} from "../../App";

class LogIn extends Component{

    handleSubmit = (event) =>
    {
        event.preventDefault();
        const email = document.getElementById('LogEmail').value;
        const phone = document.getElementById('LogPhone').value;
        const loginData = {
            username: email,
            password: phone,
        };
        console.log(JSON.stringify(loginData));
        fetch(`${link}/application/login`, {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData), // data can be `string` or {object}!
            });
    };

    render(){
        return(
            <div className ="authContainer">
            <div className ="head"> <h3>Авторизация</h3></div>
                <form onSubmit={this.handleSubmit}>
                    <input id="LogEmail"
                           className="LogEmail"
                           type="LogEmail"
                           name = "Email"
                           required
                           placeholder="логин"
                    />
                    <input id="LogPhone"
                           className="LogPhone"
                           type="tel"
                           name = "пароль"
                           required
                           placeholder="пароль"
                    />
                        <button className="logIn" >Войти</button>
                </form>
            </div>
        )
    }

}

export default LogIn;