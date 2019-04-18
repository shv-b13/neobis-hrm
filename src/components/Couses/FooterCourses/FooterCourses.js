import React, { Component } from 'react';
import './FooterCourses.css';
import up from '../image/up arrow.png';
import teacher from '../image/teacher.png';

class FooterCourses extends Component{

    render(){
        return(
            <div className="footer-courses">
                <h1 className="ces-says">Что говорят основатели</h1>
                <div className="ceos-container">
                    <div className="ceos-item">
                        <div className="square"/>
                        <img src={teacher} alt="" className="ceo-photo"/>
                        <div className="ceo-name">Том Круз</div>
                        <div className="ceo-position">
                            CEO, один из основателей Neobis
                        </div>
                        <div className="ceo-quote">
                            “Хочешь путёвку в мир IT? Тогда запишитесь на
                            наши курсы по базовому программированию и мы
                            покажем всё разнообразие процесса
                            разработки приложений. Дерзайте!”
                        </div>
                    </div>
                    <div className="ceos-item">
                        <div className="square"/>
                        <img src={teacher} alt="" className="ceo-photo"/>
                        <div className="ceo-name">Том Круз</div>
                        <div className="ceo-position">
                            CEO, один из основателей Neobis
                        </div>
                        <div className="ceo-quote">
                            “Хочешь путёвку в мир IT? Тогда запишитесь на
                            наши курсы по базовому программированию и мы
                            покажем всё разнообразие процесса
                            разработки приложений. Дерзайте!”
                        </div>
                    </div>
                </div>
                <div className="button-up"><a href={"#header"}><img src={up} alt=""/></a></div>
                <a href={"#coursesContainer"}><div className="button-to-courses"><p>К КУРСАМ</p></div></a>
            </div>
        )
    }

}

export default FooterCourses;