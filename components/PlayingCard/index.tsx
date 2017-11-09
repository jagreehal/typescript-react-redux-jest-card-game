import * as React from 'react';
import { Card, CardSuit } from '../../types';
import styled, { css } from 'react-emotion';

type Props = {
  small?: boolean,
  card: Card
};

const smallCss = css`
  width: 5em;
  height: 7.5em;
`;

const Card = styled('div')`
  display: inline-block;
  position: relative;
  width: 10em;
  height: 15em;
  background: #fff;
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3);
  transform-style: preserve-3d;
  transition: transform 1s;
  backface-visibility: hidden;
  border-radius: 0.5em;
`;

const CardContent = styled('figure')`
  display: flex;
  margin: 0;
  padding: 0;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 0.5em;

  &:before {
    position: absolute;
    font-size: 2em;
    left: 0.25em;
    top: 0.25em;
  }

  &:after {
    position: absolute;
    font-size: 2em;
    right: 0.25em;
    bottom: 0.25em;
  }

  p {
    font: 6em Times New Roman, serif;
  }
`;

const Diamonds = styled(CardContent)`
  &:before,
  &:after {
    content: '♦';
    color: #ff0000;
  }
`;

const Clubs = styled(CardContent)`
  &:before,
  &:after {
    content: '♣';
    color: #000;
  }
`;

const Spades = styled(CardContent)`
  &:before,
  &:after {
    content: '♣';
    color: #000;
  }
`;

const Hearts = styled(CardContent)`
  &:before,
  &:after {
    content: '♥';
    color: #ff0000;
  }
`;

const CardBack = styled(CardContent)`
  background-color: #dfdbe5;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

function getCardSuit(cardSuit: CardSuit) {
  switch (cardSuit) {
    case 'diamonds':
      return Diamonds;
    case 'hearts':
      return Hearts;
    case 'clubs':
      return Clubs;
    case 'diamonds':
      return Diamonds;
  }
}

const cardComponent = ({ card, small = false }: Props) => {
  let CardEl = getCardSuit(card.suit);

  const front = (
    <CardEl>
      <p>{card.display}</p>
    </CardEl>
  );

  const back = <CardBack />;

  return <Card>{card.flipped ? front : back}</Card>;
};

export default cardComponent;

// const cardComponent = ({ card, small = false }: Props) => {
//   const cardSuit = `ma0 front ${card.suit}`;
//   const cardClass =
//     'card' + (card.flipped ? '' : ' showBack') + (small ? ' small' : '');

//   const front = (
//     <figure className={cardSuit}>
//       <p>{card.display}</p>
//     </figure>
//   );

//   const back = <figure className="ma0 back" />;

//   return <div className={cardClass}>{card.flipped ? front : back}</div>;
// };
