/* eslint-disable array-callback-return,no-unused-vars */
import React, { Component } from 'react';
import './ListCoursesElement.css';
import { createBrowserHistory } from 'history';
import Language from "../../Language/Language";
import coursesImg from '../image/image 2.png';
import 'moment/locale/ru'
var moment = require('moment');
moment.locale('ru');
const history = createBrowserHistory();

class ListCoursesElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coursesList: [],
        };
    }

    async componentWillMount() {
        const requestCoursesInfo = await fetch('https://cors-anywhere.herokuapp.com/https://neolab2.herokuapp.com/courses/', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        });
        if (requestCoursesInfo.ok) {
            const coursesInfoJson = await requestCoursesInfo.json();
            await this.setState({coursesList: coursesInfoJson});
        } else {
            console.log('Response error')
        }
    }

    render() {
        return(
            <div className="main-container">
                <div id="coursesContainer">
                    {this.state.coursesList.map(function(course) {
                        function declension(num) {
                            const sprintList = ['неделя', 'недели', 'недель'];
                            var result;
                            let count = num % 100;
                            if (count >= 5 && count <= 20) {
                                result = sprintList['2'];
                            } else {
                                count = count % 10;
                                if (count == 1) {
                                    result = sprintList['0'];
                                } else if (count >= 2 && count <= 4) {
                                    result = sprintList['1'];
                                } else {
                                    result = sprintList['2'];
                                }
                            }
                            return num + " " + result;
                        }
                        function categoryChoise(category) {
                                if (category === 1) {
                                    return 'ОНЛАЙН КУРСЫ';
                                } else if (category === 2) {
                                    return 'ОФЛАЙН КУРСЫ';
                                } else {
                                    return 'МАСТЕР-КЛАССЫ';
                                }
                            }
                        return (
                            <div key={course} className="coursesBlockParent">
                                <button className="detailButton"
                                        onClick={()=> {
                                            history.push({pathname: `/courses/${course.id}`, state: {courseId: course.id}});
                                            history.go(`/courses/${course.id}`);
                                        }}>
                                    ПОДРОБНЕЕ</button>
                                <div className="coursesBlockChild" id="coursesBlockChild">
                                    <div className="photoPart"><img src={coursesImg} alt={course.title}/></div>
                                    <div className="infoPart">
                                        <h1 className="titleText">{course.title}</h1>
                                        <p className="extraText">{course.description}</p>
                                        <h6 id="date"><span className="spanH6">C
                                        </span>{' '+ moment(course.start).format('D MMMM')+ ' '}<span class='spanH6'>по</span>
                                            {' '+ moment(course.finish).format('D MMMM')}</h6>
                                        <p className="sprint">{declension(course.duration)}</p>
                                    </div>
                                </div>
                                <div className={'category'+course.category} id="category">
                                    <h1 className="categoryText">{categoryChoise(course.category)}</h1>
                                    </div>
                            </div>
                        );
                    })}
                </div>
                <div className="text">
                    <h1 className="h1-team">наша команда</h1>
                    <p className="p-team">Наши преподаватели - самые амбициозные и креативные ребята, готовые с
                        удовольствием
                        делятся своими знаниями. У каждого Вы найдете индивидуальный подход к обучению программирования,
                        где 80% курсов - необходимая практика.</p>
                </div>
            </div>
        )
    }
}

export default ListCoursesElement;