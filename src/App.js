import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/loginpage/loginpage';
import './App.css';
export const link = 'http://46.101.236.211:3222/api/v1';


class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
      </Router>
    );
  }
}

export default App;
