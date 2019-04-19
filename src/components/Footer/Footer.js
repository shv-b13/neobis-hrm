import React, {Component} from 'react';

import Language from '../Language/Language';

import './Footer.css';

import rectangle from './img/rectangle.png';

class Footer extends Component {

    render() {
        return (
            <footer className="block_footer">
                <div className="footer_content">
                    <div className="footer_block">
                        <a href="https://www.facebook.com/neobis.clubs/" className="footer_link">
                            <div className="footer_img">
                                <img src={rectangle} alt="rectangle"/>
                            </div>
                            <p className="footer_p">
                                Facebook
                            </p>
                        </a>
                        <a href="https://www.instagram.com/neobis.kg/?utm_source=ig_profile_share&igshid=1gie9xdacao2t" className="footer_link">
                            <div className="footer_img">
                                <img src={rectangle} alt="rectangle"/>
                            </div>
                            <p className="footer_p">
                                Instagram
                            </p>
                        </a>
                        <a href="https://t.me/neobis/" className="footer_link">
                            <div className="footer_img">
                                <img src={rectangle} alt="rectangle"/>
                            </div>
                            <p className="footer_p">
                                Telegram
                            </p>
                        </a>
                    </div>
                    <Language/>
                </div>

            </footer>
        )
    }
}

export default Footer;