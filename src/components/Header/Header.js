import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './Header.css';

import leaf from './leaf.png'

class Header extends Component {

    state = {
        isOpen: true
    }

    Show = () => {
        this.setState({isOpen: true});
        const ul = document.getElementById('menu');
        const header = document.getElementsByClassName('header');


        if (this.state.isOpen) {
            header[0].style.gridTemplatRows = '1fr';
            //ul.style.display = 'grid';
            ul.style.transition = '.5s';
            ul.style.opacity = '1';
            ul.style.height = 'auto';
            ul.style.transitionTimingFunction = 'ease';
            ul.style.gridTemplateRows = '1fr 1fr 1fr 1fr 1fr 1fr 1fr';
            ul.style.gridTemplateColumns = '200px';

            this.setState({isOpen: false});
        }

        if (!this.state.isOpen) {
            ul.style.height = '0';
            ul.style.opacity = '0';
            ul.style.transition = '.5s';
            ul.style.transitionTimingFunction = "ease";
            ul.style.gridTemplateColumns = '0px';
        }

    }

    showMenu = () => {

        const logo = document.getElementById('h_logo');
        const button = document.getElementById('showMenu');
        const menuAdap = document.getElementsByClassName('header_logo');

        const rotateL = document.getElementById('rotateLeft');
        const rotateR = document.getElementById('rotateRight');
        const middle = document.getElementById('linedisap');

        if (this.state.isOpen) {
            logo.transition = '.5s';
            logo.style.transitionTimingFunction = 'ease';
            logo.style.opacity = '0';

            menuAdap[0].style.display = 'none';

            button.style.justifySelf = 'start';
            button.style.marginRight = '0';
            button.style.marginLeft = '20px';
            button.transition = '.5s';
            button.style.transitionTimingFunction = 'ease';


            rotateL.style.transition = ".5s"
            rotateL.style.transitionTimingFunction = "ease";
            rotateL.style.transform = 'translateY(7px) rotate(45deg)';
            rotateL.style.backgroundColor = '#32B482';

            middle.style.opacity = '0';
            middle.style.transform = 'translateX(-15px)';
            middle.style.transition = '.5s';
            middle.style.transitionTimingFunction = "ease";

            rotateR.style.transform = 'translateY(-5px) rotate(-45deg)';
            rotateR.style.backgroundColor = '#32B482';

        }

        if (!this.state.isOpen) {

            logo.style.opacity = '1';
            logo.transition = '.5s';
            logo.style.transitionTimingFunction = 'ease';

            menuAdap[0].style.display = 'grid';

            button.style.justifySelf = 'end';
            button.style.marginRight = '27px';
            button.style.marginLeft = '0';
            button.transition = '.5s';
            button.style.transitionTimingFunction = 'ease';

            rotateL.style.transition = ".5s"
            rotateL.style.transitionTimingFunction = "ease";
            rotateL.style.transform = 'translateY(0) rotate(0deg)';
            rotateL.style.transition = ".5s"
            rotateL.style.transitionTimingFunction = "ease";
            rotateL.style.backgroundColor = '#202020';

            middle.style.opacity = '1';
            middle.style.transform = 'translateX(0)';
            middle.style.transition = '.5s';
            middle.style.transitionTimingFunction = "ease";

            rotateR.style.transform = 'translateY(0) rotate(0deg)';
            rotateR.style.backgroundColor = '#202020';

        }

        this.Show();

    }

    render() {

        return (
            <div className="container">

                <header className="header">

                    <div className="header_adap" id="h_adap">

                        <div className="header_logo">
                            <img src={leaf} alt="leaf" className="header_img" id="h_logo"/>
                        </div>

                        <button className="header_show" id="showMenu" onClick={this.showMenu}>
                            <div className="header_line" id="rotateLeft"></div>
                            <div className="header_line" id="linedisap"></div>
                            <div className="header_line" id="rotateRight"></div>
                        </button>

                    </div>


                    <ul className="header_ul" id="menu">

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