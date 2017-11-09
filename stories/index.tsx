import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Card } from '../types';
import { cardAclubs, cardAhearts } from '../cards';

type Props = {
  small?: boolean,
  card: Card
};

import PlayingCard from '../components/PlayingCard/index';

const flippedCard: Card = Object.assign({}, cardAclubs, { flipped: true });

console.log(flippedCard);

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('PlayingCard', module)
  .add('default', () => <PlayingCard card={cardAclubs} />)
  .add('flipped', () => <PlayingCard card={flippedCard} />)
  .add('Small', () => <PlayingCard card={flippedCard} small={true} />);
