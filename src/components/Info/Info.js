import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Events from '../Events/Events';
import BeautEl from '../BeatyEl/BeautEl';

import './Info.css';

import projects from './img/notes.png';
import courses from './img/Shapka.png';
import star from './img/Star.png';

class Info extends Component {

    render() {
        return (
            <div className="container">
                <div className="info">

                    <div className="info_content">
                        <div className="info_cubes_content">
                            <div className="info_cubes">
                                <Link to="/" className="info_block">
                                    <div className="info_pad">
                                        <div className="info_block_img">
                                            <img src={courses} alt="club" className="info_img"/>
                                        </div>
                                        <div className="info_text">
                                            <p className="info_p">Клуб</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/" className="info_block">
                                    <div className="info_pad">
                                        <div className="info_block_img">
                                            <img src={projects} alt="club" className="info_img"/>
                                        </div>
                                        <div className="info_text">
                                            <p className="info_p">Проекты</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/" className="info_block">
                                    <div className="info_pad">
                                        <div className="info_block_img">
                                            <img src={courses} alt="courses" className="info_img"/>
                                        </div>
                                        <div className="info_text">
                                            <p className="info_p">Курсы</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/" className="info_block">
                                    <div className="info_pad">
                                        <div className="info_block_img">
                                            <img src={projects} alt="cooperation" className="info_img"/>
                                        </div>
                                        <div className="info_text">
                                            <p className="info_p">Сотрудничество</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="info_star">
                            <img src={star} alt="star"/>
                        </div>
                        <Events/>
                        <div className="info_star">
                            <img src={star} alt="star"/>
                        </div>
                        <BeautEl/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info;