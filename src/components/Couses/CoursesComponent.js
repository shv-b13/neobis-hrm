import React, { Component } from 'react';
import ListCoursesElement from "./ListCoursesElement/ListCoursesElement";
import TeacherBlock from "./TeacherBlock/TeacherBlock";
import FooterCourses from "./FooterCourses/FooterCourses";
import HeaderCourses from './HeaderCourses/HeaderCourses';
import Header from "../Header/Header";
import Language from "../Language/Language";

class CoursesComponent extends Component {

    render() {
        return (
            <div className="main-courses-container">
                <Header/>
                <HeaderCourses/>
                <ListCoursesElement/>
                <TeacherBlock/>
                <FooterCourses/>
            </div>
        );
    }
}

export default CoursesComponent;
