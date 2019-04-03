import React, { Component } from 'react';
import { shallow } from "enzyme";

import Home from "./Home";


describe("<Home/>", () => {
    let home;
    beforeEach(() => { home = shallow(<Home />); })

    it('should render without throwing an error', () => {
        expect(home.find('div.home')).toHaveLength(1);
    })

});