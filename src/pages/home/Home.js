import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import Metaphor from '../../components/Intro/Metaphor';
import Info from '../../components/Info/Info';
import Footer from  '../../components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap-theme.css'
import './Home.css';

class Home extends Component {

    render() {
        return (
            <div className="home">
                <Header />
                <Metaphor />
                <Info />
                <Footer />
            </div>
        )
    }
}

export default Home;