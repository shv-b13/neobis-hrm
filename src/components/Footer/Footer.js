import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './Footer.css';

import rectangle from './img/rectangle.png';

class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <div className="footer_content">
                    <Link to="/" className="footer_link">
                        <div className="footer_img">
                            <img src={rectangle} alt="rectangle"/>
                        </div>
                        <p className="footer_p">
                            Facebook
                        </p>
                    </Link>
                    <Link to="/" className="footer_link">
                        <div className="footer_img">
                            <img src={rectangle} alt="rectangle"/>
                        </div>
                        <p className="footer_p">
                            Instagram
                        </p>
                    </Link>
                    <Link to="/" className="footer_link">
                        <div className="footer_img">
                            <img src={rectangle} alt="rectangle"/>
                        </div>
                        <p className="footer_p">
                            Telegram
                        </p>
                    </Link>
                </div>
            </footer>
        )
    }
}

export default Footer;