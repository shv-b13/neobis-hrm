import React, { Component } from 'react';
import { shallow } from "enzyme";
import Info from "./Info";

describe("<Info />", () => {

    it('includes 1 div with class info', () => {
        let info = shallow(<Info />);
        expect(info.find('div.info')).toHaveLength(1);
    });
});