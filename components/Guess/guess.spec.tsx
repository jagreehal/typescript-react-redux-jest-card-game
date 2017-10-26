import * as React from 'react';
import Guess from './index';
import { mount } from '../../test';
import { GuessResponse } from '../../types';

describe('Guess tests', () => {
  let guess;
  let wrapper;
  beforeEach(() => {
    guess = jest.fn();
    wrapper = mount(<Guess guess={guess} />);
  });

  it('Will call guessHigh action on click', () => {
    wrapper.find('#guessHigh').simulate('click');
    expect(guess.mock.calls.length).toBe(1);
    expect(guess.mock.calls[0][0]).toBe(GuessResponse.high);
  });

  it('Will call guessLow action on click', () => {
    wrapper.find('#guessLow').simulate('click');
    expect(guess.mock.calls[0][0]).toBe(GuessResponse.low);
  });
});
