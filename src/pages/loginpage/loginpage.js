import React, {Component} from 'react';

import Login from '../../components/Login/Login';
import Header from '../../components/Header/Header';

import './loginpage.css';

class loginpage extends Component {
    render() {
        return (
            <div className="home">
                <Header />
                <div className="loginpage">

                    <Login />
                </div>
            </div>
        )
    }
}

export default loginpage;