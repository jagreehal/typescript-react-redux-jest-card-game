import * as React from 'react';
import StartButton from './index';
import { mount } from '../../test';

import { Level } from '../../types';

describe('Start tests', () => {
  it('Will call startGame action on click', () => {
    let start = jest.fn();
    const wrapper = mount(<StartButton start={start} />);
    wrapper.find('#easy').simulate('click');
    expect(start.mock.calls[0][0]).toBe(Level.easy);
  });

  it('Will call startGame action on click', () => {
    let start = jest.fn();
    const wrapper = mount(<StartButton start={start} />);
    wrapper.find('#hard').simulate('click');
    expect(start.mock.calls[0][0]).toBe(Level.hard);
  });
});
