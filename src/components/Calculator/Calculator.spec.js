import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Calculator from './Calculator';
import Display from '../Display/Display';


configure({adapter: new Adapter()});

describe('Calculator', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Calculator />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Display Component', () => {
    expect(wrapper.containsMatchingElement(
      <Display displayValue={wrapper.instance().state.displayValue} />
      )).toEqual(true);
  })

});