import React, {Component} from 'react';

import PersonalInfo from '../../components/PersonalInfo/PersonalInfo';
import Header from '../../components/Header/Header';

import './Home.css';

class Home extends Component {


    render() {

        return (

            <div className="home">

                <Header />
                <PersonalInfo />

            </div>

        )


    }
}

export default Home;