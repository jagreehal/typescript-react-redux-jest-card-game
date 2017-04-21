
import * as React from 'react';
import PlayAgain from './index';
import { mount } from 'enzyme';

describe('PlayAgain tests', () => {
  
  it('Will call reset action on click', () => {
    let reset = jest.fn();
    const wrapper = mount(<PlayAgain reset={reset} />);
    wrapper.find('a').simulate('click');    
    expect(reset.mock.calls.length).toBe(1)      
  });
  
});