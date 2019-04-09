import React, { Component } from 'react';

import './Language.css';

class Language extends  React.Component {

    state = {
        click: false
    }

    changeLang = () =>{
        this.setState({click: true})
        const rus = document.getElementById('rus');
        const eng = document.getElementById('eng');

        if(this.state.click)
        {
            eng.style.backgroundColor = "#32B482";
            eng.style.color = "#fff";
            eng.disabled = true;
            eng.style.transition = "1s"
            eng.style.transitionTimingFunction = "ease";
            eng.style.boxShadow = "0px 0px 20px rgba(50, 180, 130, 0.25)";

            rus.style.backgroundColor = "#fff";
            rus.style.color = "#000";
            rus.disabled = false;
            rus.style.transition = "1s";
            rus.style.transitionTimingFunction = "ease";
            rus.style.boxShadow = "none";


            this.setState({click: false});
        }

        if(!this.state.click)
        {

            rus.style.backgroundColor = "#32B482";
            rus.style.color = "#fff";
            rus.disabled = true;
            rus.style.transition = "1s"
            rus.style.transitionTimingFunction = "ease";
            rus.style.boxShadow = "0px 0px 20px rgba(50, 180, 130, 0.25)";

            eng.style.backgroundColor = "#fff";
            eng.style.color="#000";
            eng.disabled = false;
            eng.style.transition = "1s";
            eng.style.transitionTimingFunction = "ease";
            eng.style.boxShadow = "none";

            this.setState({click: true});
        }

    }




    render() {
        return(
            <div className="language">
                {/*<div className="lg_block">*/}
                    <button className="lg_change" id="rus" onClick={this.changeLang} >РУС</button>
                    <button className="lg_change" id="eng" onClick={this.changeLang} >ENG</button>
                {/*</div>*/}
            </div>
        )
    }

}

export default Language;