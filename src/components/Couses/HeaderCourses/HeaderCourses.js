import React, { Component } from 'react';
import './HeaderCourses.css';
import Header from "../../Header/Header";


class HeaderCourses extends Component{


    render(){
        return(
                <div className="intro" id="intro">
                    <div className="top">
                        <div className="left">
                            <h1>КУРСЫ <span>NEOLABS</span></h1>
                        </div>
                        <div className="right-courses">
                            <h3>ЗАПРОГРАММИРУЙ СВОЕ БУДУЩЕЕ!</h3>
                            <div className="rectangle"/>
                        </div>
                    </div>
                    <div className="bottom">
                        <h1>Давно хотел изучать программирование, но не знаешь с чего
                            начать? А в интернете куча непонятных туториалов,
                            видеоуроков от которых каша в голове? </h1>
                        <p>Спешим тебя обрадовать. Необис запускает курсы базового программирования NeoLabs.
                            Эти курсы созданы для тех, кто жаждет новых знаний,
                            хочет жить в ногу со временем, разбираться в сфере IT.</p>
                    </div>
                </div>
        )
    }

}

export default HeaderCourses;