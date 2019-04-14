import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Blog from "./components/Blog/containers/Blog/Blog";

import Home from './pages/home/Home';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home}/>
        <Route path="/blog" exact component={Blog}/>
      </Router>
    );
  }
}

export default App;
