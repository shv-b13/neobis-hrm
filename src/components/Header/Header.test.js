import React, { Component } from 'react';
import { shallow } from "enzyme";
import Header from "./Header";

describe("<Header/>", () => {
    let header;
    beforeEach(() => { header = shallow(<Header />); });

    it('includes 1 div with class header', () => {
        expect(header.find('header.header')).toHaveLength(1);
    });
});