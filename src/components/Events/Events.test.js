import React, { Component } from 'react';
import { shallow } from "enzyme";
import Events from "./Events";

describe('<Events />', () => {

    it('includes 1 div with class events', () => {
        let events = shallow(<Events />);
        expect(events.find('div.events')).toHaveLength(1);
    });
});