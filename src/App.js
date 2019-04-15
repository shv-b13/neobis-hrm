import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {PrivateRoute} from './components/PrivateRoute';
import './App.css';

import CoursesComponent from "./components/Couses/CoursesComponent";
import CoursesDetailed from "./components/CoursesDetailed/CoursesDetailed";
import Blog from "./components/Blog/containers/Blog/Blog";
import Home from './pages/home/Home';
import TimeSlotsPanel from './pages/time-slots-panel/TimeSlotsPanel';
import Login from './pages/loginpage/loginpage';
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";

export const api_base = 'http://46.101.236.211:3222/api/v1';

class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={Home}/>
                <Route path="/blog" exact component={Blog}/>
                <Route path='/courses' exact component={CoursesComponent}/>
                <Route path='/courses/:id' exact component={CoursesDetailed}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/application" exact component={PersonalInfo}/>
                <PrivateRoute path="/time-slots" exact component={TimeSlotsPanel}/>
            </Router>
        );
    }
}

export default App;