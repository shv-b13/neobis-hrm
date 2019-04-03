import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './Header.css';

import leaf from './leaf.png'

class Header extends Component {

    render() {
        return (
            <div className="container">
            <header className="header">

                    <div className="header_logo">
                        <img src={leaf} alt="leaf"/>
                    </div>
                    <ul className="header_ul">

                        <li className="header_li">
                            <Link className="header_link" to="/">О нас </Link>
                        </li>
                        <li className="header_li">
                            <Link className="header_link" to="/">Клуб программирования</Link>
                        </li>
                        <li className="header_li">
                            <Link className="header_link" to="/">Мероприятия</Link>
                        </li>
                        <li className="header_li">
                            <Link className="header_link" to="/">Курсы</Link>
                        </li>
                        <li className="header_li">
                            <Link className="header_link" to="/">Блог</Link>
                        </li>
                        <li className="header_li">
                            <Link className="header_link" to="/">Сотрудничество</Link>
                        </li>
                        <li className="header_li">
                            <Link className="header_link" to="/">Контакты</Link>
                        </li>
                    </ul>

            </header>
            </div>
        )
    }
}

export default Header;