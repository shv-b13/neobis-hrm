import React, {Component} from 'react';

import Login from '../../components/Login/Login';
import Header from '../../components/Header/Header';

import './loginpage.css';

class loginpage extends Component {


    render() {

        return (

            <div className="loginpage">

                <Header />
                <Login />

            </div>

        )


    }
}

export default loginpage;