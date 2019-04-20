/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import './TeacherBlock.css';
import Slider from "react-slick";
import FooterCourses from "../FooterCourses/FooterCourses";
import teacher from '../image/teacher.png';
import right from '../image/right arrow.png';
import left from '../image/left arrow.png';

function SampleNextArrow(props) {
    const {onClick } = props;
    return (
        <img src={right} alt="" onClick={onClick} className="rightArrow"/>
    );
}
function SamplePrevArrow(props) {
    const {onClick} = props;
    return (
        <img src={left} alt="" onClick={onClick} className="leftArrow"/>
    );
}

class TeacherBlock extends Component{
    constructor(props){
        super(props);
        this.state={
            teacherList:[]
        };
    }

    async componentDidMount() {

        const requestTeacherInfo = await fetch('https://cors-anywhere.herokuapp.com/https://neolab2.herokuapp.com/teachers/', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
            mode: 'cors',
        });
        if (requestTeacherInfo.ok) {
            const teacherInfoJson = await requestTeacherInfo.json();
            await this.setState({teacherList: teacherInfoJson});
        }else{
            console.log('fuk')
        }
    }

    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            nextArrow: <SampleNextArrow/>,
            prevArrow: <SamplePrevArrow/>,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: false,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="carusel">
                <div className="teacher">
                    <Slider {...settings} className="slick-slider">
                        {this.state.teacherList.map(function(slide) {
                            return (
                                <div key={slide} className="teacher-container">
                                    <div  className="item">
                                        <img src={teacher} alt="" className="teacherImg"/>
                                        <h1 className="teacherName">{slide.name}</h1>
                                        <p className="teacherPosition">{slide.position}</p>
                                        <h2 className="teacherQuote">"{slide.quote}"</h2>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
                <FooterCourses/>
            </div>
        );
    }
}
export default TeacherBlock;