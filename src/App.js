import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import CoursesComponent from "./components/Couses/CoursesComponent";
import CoursesDetailed from "./components/CoursesDetailed/CoursesDetailed";
import Blog from "./components/Blog/containers/Blog/Blog";
import Home from './pages/home/Home';

class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={Home}/>
                <Route path="/blog" exact component={Blog}/>
                <Route path='/courses' exact component={CoursesComponent}/>
                <Route path='/courses/:id' exact component={CoursesDetailed}/>
            </Router>
        );
    }
}

export default App;
