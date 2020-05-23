import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './App';
import Calculator from '../Calculator/Calculator';


configure({adapter: new Adapter()});

describe('App', () => {

    let wrapper;

    beforeEach(() => wrapper = shallow(<App />));

    it('should render correctly', () => expect(wrapper).toMatchSnapshot());

    it('should render a <div />', () => {
       
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should render the Calculator component', () => {
        expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
    });
});