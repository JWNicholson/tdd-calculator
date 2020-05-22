import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './App';


configure({adapter: new Adapter()});

describe('App', () => {
    it('should render a <div />', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('div').length).toEqual(1);
    });
});