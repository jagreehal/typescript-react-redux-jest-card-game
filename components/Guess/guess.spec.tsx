import * as React from 'react';
import Guess from './index';
import { mount } from 'enzyme';

describe('Guess tests', () => {
  let guessHigh;
  let guessLow;
  let wrapper;
  beforeEach(() => {

    guessHigh = jest.fn();
    guessLow = jest.fn();
    wrapper = mount(<Guess guessHigh={guessHigh} guessLow={guessLow} />);

  });

  it('Will call guessHigh action on click', () => {    
    wrapper.find('#guessHigh').simulate('click');
    expect(guessHigh.mock.calls.length).toBe(1);
  });

  it('Will call guessLow action on click', () => {    
    wrapper.find('#guessLow').simulate('click');
    expect(guessLow.mock.calls.length).toBe(1);
  });
});