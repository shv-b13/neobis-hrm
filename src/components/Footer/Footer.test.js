import React, { Component } from 'react';
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("<Footer/>", () => {


    it('includes 1 div with class header', () => {
        let footer = shallow(<Footer />);
        expect(footer.find('footer.footer')).toHaveLength(1);
    });
});