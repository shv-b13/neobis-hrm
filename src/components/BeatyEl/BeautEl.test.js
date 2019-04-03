import React, { Component } from 'react';
import { shallow } from "enzyme";
import BeautEl from "./BeautEl";

describe('<BeautEl />', () => {

    it('includes 1 div with class beatyEl', () => {
        let beautEl = shallow(<BeautEl />);
        expect(beautEl.find('div.beatyEl')).toHaveLength(1);
    });
});