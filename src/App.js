import React, { Component } from 'react';
// import Navigation from './components/Blog/Navigation';
import CoursesComponent from "./components/Couses/CoursesComponent";
import CoursesDetailed from "./components/CoursesDetailed/CoursesDetailed";

class App extends Component {
  render() {
    return (
      <div>
            <CoursesDetailed/>
            {/*<CoursesComponent/>*/}
      </div>
    );
  }
}

export default App;
