import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

import {fetchSiteInfo} from "../../store/actions/siteInfo";

import Grider from "../../components/UI/Grider/Grider";
import Ellipses from "../../components/BigLogoSection/Ellipses/Ellipses";
import NavBar from "../../components/UI/NavBar/NavBar";
import AboutUsIntro from "../../components/AboutUs/AboutUsIntro/AboutUsIntro";
import OurSection from "../../components/AboutUs/OurSection/OurSection";
import WeTeachSection from "../../components/WeTeachSection/WeTeachSection";
import Technologies from "../../components/Technologies/Technologies";
import DownArrow from "../../components/UI/DownArrow/DownArrow";
import WeSection from "../../components/WeSection/WeSection";

import './MainPage.css';
import SectionTitle from "../../components/UI/SectionTitle/SectionTitle";
import SectionText from "../../components/UI/SectionText/SectionText";
import NeobisInNumbers from "../../components/NeobisInNumbers/NeobisInNumbers";

import GradCarousel from "../../components/GraduatesCarousel/GraduatesCarousel";
import StepsSection from "../../components/StepsSection/StepsSection";
import ContactsSection from "../../components/ContactsSection/ContactsSection";
import SocialFooter from "../../components/SocialFooter/SocialFooter";
import {Link} from "react-router-dom";

class MainPage extends Component {

    componentDidMount() {
        this.props.fetchSiteInfo();
        console.log(this.props.aboutUsSection);
    }

    render() {
        return (
            <Fragment>
                <Ellipses/>
                <NavBar/>
                <Grider>
                    <AboutUsIntro/>
                    <DownArrow/>

                    <SectionTitle title='Наш блог!'/>
                    <DownArrow/>
                    <Link to="/blog"><button className={'NeobisButton'}>Посмотреть блог</button></Link>

                    <OurSection/>
                    <WeSection/>
                </Grider>

                <div className="BigGreyCircleContainer">
                    <div className="BigGreyCircle" id={'educationSteps'}>
                        <SectionTitle title='Этапы обучения в Neobis'/>
                        <SectionText textWidth='450px'>
                            Мы учим современным, полноценным языкам программирования, которые используются везде.
                            Студенты могут применить свои теоретические знания на практике под присмотром опытного
                            наставника.
                        </SectionText>
                        <DownArrow/>
                        <StepsSection/>
                        <NeobisInNumbers numbers={this.props.aboutUsSection.stats}/>
                    </div>
                </div>

                <Grider>
                    <WeTeachSection/>
                    <Technologies/>
                </Grider>
                <GradCarousel/>
                {/*<AlumniSection alumnus={this.props.aboutUsSection.graduates}/>*/}
                <ContactsSection contacts={this.props.aboutUsSection.contacts}/>
                <SocialFooter/>

            </Fragment>

        );
    }
}

const mapStateToProps = state => ({
    aboutUsSection: state.siteInfo.aboutUs
});

const mapDispatchToProps = dispatch => ({
    fetchSiteInfo: () => dispatch(fetchSiteInfo())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
