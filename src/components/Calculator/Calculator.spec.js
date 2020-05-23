import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Calculator from './Calculator';


configure({adapter: new Adapter()});

describe('Calculator', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Calculator />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});