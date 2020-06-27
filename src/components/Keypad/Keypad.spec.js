import React from 'react';
import { shallow } from 'enzyme';
import Keypad from '../Keypad/Keypad';

describe('Keypad', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Keypad 
                callOperator={jest.fn()}
                handleKeyPress={}
                numbers={[]}
                operators={[]}
                setOperator={jest.fn()}
                updateDisplay={jest.fn()}
            />
        );
    });

    it('should render 4 <div />', () => {
        expect(wrapper.find('div').length).toEqual(4);
    });

    it('should render an instance of the Key component', () => {
        expect(wrapper.find('Key').length).toEqual(1);
      });

    it('renders the values of numbers', () => {
        wrapper.setProps({numbers: ['0', '1', '2']});
        expect(wrapper.find('.numbers-container').text().toEqual('012'));
    });

    it('render the values of operators', () => {
        wrapper.setProps({operators: ['+', '-', '*', '/']});
        expect(wrapper.find('.operators-container').text()).toEqual('+-*/');
    });

});