import React, { Component } from 'react';
import { shallow } from "enzyme";
import Metaphor from "./Metaphor";

describe("<Metaphor />", () => {
    it('includes 1 div with class metaphor', () => {
        let metaphor = shallow(<Metaphor />);
        expect(metaphor.find('div.metaphor')).toHaveLength(1);
    });
});