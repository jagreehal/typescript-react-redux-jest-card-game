import * as React from 'react';

import CurrentAndNext from './index';
import { mount } from '../../test';
import { cardAclubs, card2clubs } from '../../cards';

describe('CurrentAndNext tests', () => {
  const card = cardAclubs;
  const remainingCards = [card2clubs];

  it('Should be current and next cards', () => {
    const wrapper = mount(
      <CurrentAndNext currentCard={card} remainingCards={remainingCards} />
    );
    expect(wrapper.find('li').length).toBe(2);
  });

  it('Should only render current card if no remaining cards', () => {
    const wrapper = mount(
      <CurrentAndNext currentCard={card} remainingCards={[]} />
    );
    expect(wrapper.find('li').length).toBe(1);
  });
});
