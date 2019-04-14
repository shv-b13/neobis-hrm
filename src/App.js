import React, { Component } from 'react';
import CoursesComponent from "./components/Couses/CoursesComponent";
import CoursesDetailed from "./components/CoursesDetailed/CoursesDetailed";
import Home from "./pages/home/Home";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path='/courses' exact component={CoursesComponent}/>
              <Route path='/courses/:id' exact component={CoursesDetailed}/>
          </Switch>
        </BrowserRouter>
        );
    }
}

export default App;
