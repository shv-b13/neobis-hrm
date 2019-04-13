import React, { Component } from 'react';
import ListCoursesElement from "./ListCoursesElement/ListCoursesElement";
import TeacherBlock from "./TeacherBlock/TeacherBlock";
import FooterCourses from "./FooterCourses/FooterCourses";
import HeaderCourses from './HeaderCourses/HeaderCourses';

class CoursesComponent extends Component {
    render() {
        return (
            <div className="main-courses-container">
                <HeaderCourses/>
                <ListCoursesElement/>
                <TeacherBlock/>
                <FooterCourses/>
            </div>
        );
    }
}

export default CoursesComponent;
