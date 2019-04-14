import React, { Component } from 'react';
import './CoursesDetailed.css'
import Header from "../Header/Header";
// import Language from "../Language/Language";
import coursePhoto from './image/photo course.png';
import square from './image/Rectangle 9.png';
import logo from './image/Logo.png';

const Swal = require('sweetalert2');
var course;

class CoursesDetailed extends Component {
    constructor(props){
        super(props);
        this.state={
            coursesDetail:[],
            startDate: '',
            duration: '',
        };
    };

    handleSubmit(event){
        event.preventDefault();
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const applicationData = {
            name: name,
            surname: surname,
            phone: phone,
            email: email,
            course: course,
        };

        fetch(`https://cors-anywhere.herokuapp.com/https://neolab2.herokuapp.com/applications/`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(applicationData), // data can be `string` or {object}!
            headers: {"Content-Type": "application/json"}
        }).then((e)=>{
            if(e.ok) Swal.fire({
                text: 'Ваша заявка успешно отправлена!',
                width: 500,
                height: 500,
                showConfirmButton: true,
                confirmButtonColor: '#32B482',
            });
            else  Swal.fire({
                text: 'Ошибка. Проверьте введенные данные.',
                width: 500,
                height: 500,
                showConfirmButton: true,
                confirmButtonColor: 'red',
            });
        });
    }

    async componentWillMount() {
        const requestCoursesInfo = await fetch(`https://cors-anywhere.herokuapp.com/https://neolab2.herokuapp.com/courses/${this.props.history.location.state.courseId}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
            mode: 'cors',
        });
        const coursesInfoJson = await requestCoursesInfo.json();
        if (requestCoursesInfo.ok) {

            this.setState({coursesDetail: coursesInfoJson});
            course = await coursesInfoJson.id;

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
                const startYear = new Date(date).getFullYear();
                if (startMonth.endsWith('т')){
                    return {"date": startDay + ' '+startMonth+'а ' + startYear};
                }
                return {"date": startDay + ' '+startMonth+'я ' + startYear};
            }
            this.setState({startDate: getMonthDays(this.state.coursesDetail.start)});

            function declension(num) {
                const sprintList = ['неделя','недели','недель'];
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
                return num +" "+result;
            }
            this.setState({duration: declension(this.state.coursesDetail.duration)});

        } else{
            console.log('Response error')
        }
    }

    render() {
         return (
             <div>
                <div className="wrapper">
                    <Header/>
                    <main  className="main">
                        <div className="info">
                            <div className="description-content">
                                <span className="tags active">КУРСЫ</span>
                                <h1 className="title">{this.state.coursesDetail.title}</h1>
                                <div className="description">
                                         {this.state.coursesDetail.description}
                                </div>
                                <button className="btn active"><a href="#form-course">ЗАПИСАТЬСЯ</a></button><br/>
                                <button className="btn read-more"><a href="#read-more">ПОДРОБНЕЕ</a></button><br/>
                                <p className="start_course">
                                    Старт: {this.state.startDate.date}
                                </p>
                                <p className="duration_course">
                                    Длительность: {this.state.duration}
                                </p>
                                <p className="schedule_course">Расписание: вт - 18.30 | чт - 18.30.</p>

                            </div>
                            <div className="photo-course">
                                <img src={coursePhoto}/>
                                {/*<img src={this.state.coursesDetail.image}/>*/}
                            </div>
                        </div>

                        <div className="about-course" id="read-more">
                            <h1 className="title">О Курсах</h1>
                            <div className="description">
                                {this.state.coursesDetail.detailedDescription}
                            </div>
                            <ol className="stage-plan">
                                <li className="stage-plan__item">План обучения составленный NeoLabs, авторская программа</li>
                                <li className="stage-plan__item">Выполнение заданий, решение задач по темам и теориям, 80% практики </li>
                                <li className="stage-plan__item">Видеоуроки и живые трансляции </li>
                                <li className="stage-plan__item">Проверка знаний при переходе на следующий уровень обучения</li>
                                <li className="stage-plan__item">Сертификат, подтверждающий ваши знания Бонусы </li>
                            </ol>
                        </div>

                     </main>
                </div>
                <div className="form-course" id="form-course">
                        <h1 className="title">Запись на курс </h1>
                        <div className="subtitle">Оставьте свои контакты и мы с вами свяжемся!</div>
                        <div className="block-form">
                            <form onSubmit={this.handleSubmit}  name="application"    className="form">
                                <input  type="text" id="name" name="name" placeholder="Ваше имя" required className="form__input"/>
                                <input  type="text" id="surname"  name="surname" placeholder="Фамилия " className="form__input" required/>
                                <input  type="tel" id="phone"
                                        name = "phone" pattern="\+[0-9]{12}"
                                       placeholder="+996" required className="form__input"/>
                                <input  type="email" id="email"
                                       size="30" required placeholder="Почта" className="form__input"/>
                                <button type="submit" className="active btn">ЗАПИСАТЬСЯ И ОПЛАТИТЬ </button>
                            </form>
                            <div className="cost-course">
                                <h1 className="money">{this.state.coursesDetail.price} </h1>
                                <h2 className="currency"> СОМ </h2>
                                <div className="caption-cost-course">Стоимость курса</div>
                            </div>
                        </div>
                    </div>
                <footer className="footer-detailed">
                    <a href="#header-detailed" className="btn btn-top active">
                        {/*<img src="img/btn top.png" className="btn-top__img">*/}
                        <img src={square} className="btn-top__img"/>
                    </a>
                    <div className="neobis_logo_footer-detailed">
                        <img src={logo} />
                    </div>
                    <div className="our_email">
                        Наша почта: neolabs@gmail.com
                    </div>
                    <div className="our_tel_number">
                        Наш телефон: 0554112233
                    </div>

                </footer>
                    <div className="lang-detail">
                        <button className="btn active">РУС</button>
                        <button className="btn">ENG</button>
                    </div>
             </div>
             );
    }
}

export default CoursesDetailed;
