/* eslint-disable array-callback-return,no-unused-vars */
import React, { Component } from 'react';
import './ListCoursesElement.css';
import { createBrowserHistory } from 'history';

import coursesImg from '../image/image 2.png';


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
        let coursesContainer = document.getElementById('coursesContainer');
        if (this.state.coursesList !== []) {
                this.state.coursesList.map((arr) => {
                    let coursesBlock = document.createElement('div');
                    coursesBlock.id = 'coursesBlock';
                    coursesBlock.className = 'coursesBlockClass' + arr.id;

                    let photoPart = document.createElement('div');
                    photoPart.className = 'photoPart';

                    let infoPart = document.createElement('div');
                    infoPart.className = 'infoPart';

                    let imgChild = document.createElement('img');

                    imgChild.src = `${coursesImg}`;

                    // imgChild.src = 'https://cors-anywhere.herokuapp.com/'+arr.image;
                    // imgChild.src = arr.image;
                    imgChild.alt = 'oops';
                    photoPart.appendChild(imgChild);
                    coursesBlock.appendChild(photoPart);

                    let h1Child = document.createElement('h1');
                    h1Child.className = 'titleText';
                    h1Child.innerHTML = arr.title;
                    infoPart.appendChild(h1Child);

                    let pChild = document.createElement('p');
                    pChild.className = 'extraText';
                    pChild.innerHTML = arr.description;
                    infoPart.appendChild(pChild);

                    function categoryChoise(category) {
                        if (category === 1) {
                            return 'ОНЛАЙН КУРСЫ';
                        } else if (category === 2) {
                            return 'ОФЛАЙН КУРСЫ';
                        } else {
                            return 'МАСТЕР-КЛАССЫ';
                        }
                    }

                    let categoryTitleChild = document.createElement('div');
                    categoryTitleChild.innerHTML = categoryChoise(arr.category);
                    categoryTitleChild.className = 'category' + arr.category;
                    categoryTitleChild.id = 'category';
                    infoPart.appendChild(categoryTitleChild);

                    function getMonthDays(date) {
                        const months = [
                            'январ',
                            'феврал',
                            'март',
                            'апрел',
                            'ма',
                            'июн',
                            'июл',
                            'август',
                            'сентябр',
                            'октябр',
                            'ноябр',
                            'декабр'
                        ];
                        const startDate = new Date(date).getMonth();
                        const startMonth = months[startDate];
                        const startDay = new Date(date).getDate();
                        if (startMonth.endsWith('т')) {
                            return {"date": startDay + ' ' + startMonth + 'а'};
                        }
                        return {"date": startDay + ' ' + startMonth + 'я'};
                    }

                    let dateChild = document.createElement('h6');
                    dateChild.id = 'date';
                    dateChild.innerHTML = "<span class='spanH6'>C</span> " + getMonthDays(arr.start).date
                        + " <span class='spanH6'>по</span> " + getMonthDays(arr.finish).date;
                    infoPart.appendChild(dateChild);

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

                    let sprintChild = document.createElement('p');
                    sprintChild.className = 'sprint';
                    sprintChild.innerHTML = declension(arr.duration);
                    infoPart.appendChild(sprintChild);


                    let buttonChild = document.createElement('button');
                    buttonChild.innerHTML = 'ПОДРОБНЕЕ';
                    buttonChild.className = 'detailButton';
                    buttonChild.value = arr.id;
                    buttonChild.onclick = () => {
                        console.log({pathname: `/courses/${arr.id}`, state: {courseId: arr.id}});
                        history.push({pathname: `/courses/${arr.id}`, state: {courseId: arr.id}});
                        history.go(`/courses/${arr.id}`);
                    };
                    infoPart.appendChild(buttonChild);


                    coursesBlock.appendChild(infoPart);
                    coursesContainer.appendChild(coursesBlock);
                    // countForRender  += 1;
                });
            // }
        }
        return(
            <div className="main-container">
                <div id="coursesContainer"/>
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