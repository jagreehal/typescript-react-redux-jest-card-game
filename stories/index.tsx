import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { Card } from '../types';
import { cardAclubs, card10hearts } from '../cards';


import PlayingCard from '../components/PlayingCard';

import PreviousCards from '../components/PreviousCards';

import CurrentAndNext from '../components/CurrentAndNext';

const flippedCard: Card = Object.assign({}, cardAclubs, { flipped: true });

console.log(flippedCard);

const playingCardStories = storiesOf('PlayingCard', module);
playingCardStories.addDecorator(withKnobs);

playingCardStories
  .add('with animation', () => {
    const flipped = boolean('Flip', false);
    const card = Object.assign({}, cardAclubs, { flipped });
    return <PlayingCard card={card} />;
  })
  .add('front', () => <PlayingCard card={cardAclubs} />)
  .add('back', () => <PlayingCard card={flippedCard} />)
  .add('small front', () => <PlayingCard card={cardAclubs} small={true} />)
  .add('small back', () => <PlayingCard card={flippedCard} small={true} />);

const playedCardStories = storiesOf('Played Cards', module);

const previousCards: Array<Card> = [
  Object.assign({}, cardAclubs, { flipped: true }),
  Object.assign({}, card10hearts, { flipped: true })
];

playedCardStories.add('cards', () => <PreviousCards previousCards={previousCards} />);


const remainingCardStories = storiesOf('Remaining Cards', module);

const remainingCards: Array<Card> = [
  cardAclubs
];

remainingCardStories.add('cards', () => <CurrentAndNext currentCard={flippedCard} remainingCards={remainingCards} />);
