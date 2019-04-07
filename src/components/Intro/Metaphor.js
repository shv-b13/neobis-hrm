import React, {Component} from 'react';

import './Metaphor.css';

import logo from './img/Logo.png';

class Metaphor extends Component {

    render() {
        return (
            <div className="container">

                <div className="metaphor">

                    <div className="metaphor_block">

                        <div className="metaphor_logo_block">

                            <div className="metaphor_logo">
                                <img src={logo} alt="neobis" className="metaphor_img"/>
                            </div>
                        </div>

                        <div className="metaphor_text">
                            <p className="metaphor_p">Мы обучаем, разрабатываем и внедряем технологии на благо
                                общества</p>
                            <div className="metaphor_cube"></div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default Metaphor;