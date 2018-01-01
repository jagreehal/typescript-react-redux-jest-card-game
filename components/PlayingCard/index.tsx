import * as React from 'react';
import { Card, CardSuit } from '../../types';
import styled, { css } from 'react-emotion';

type Props = {
  small?: boolean,
  card: Card
};

const Container = styled('div')`
  position: relative;
  background: #fff;
`;

const Card = styled('div')`
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  transition: transform 1s;
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
`;

const CardContent = styled('figure')`
  margin: 0;
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
`;

const CardFront = styled(CardContent)`
  background: #fff;

  &:before {
    position: absolute;
    left: 0.25em;
    top: 0.25em;
  }

  &:after {
    position: absolute;
    right: 0.25em;
    bottom: 0.25em;
  }
  p {
  }
`;

const CardBack = styled(CardContent)`
  background-color: #dfdbe5;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  transform: rotateY(180deg);
`;

const Diamonds = styled(CardFront)`
  &:before,
  &:after {
    content: '♦';
    color: #ff0000;
  }
`;

const Clubs = styled(CardFront)`
  &:before,
  &:after {
    content: '♣';
    color: #000;
  }
`;

const Spades = styled(CardFront)`
  &:before,
  &:after {
    content: '♣';
    color: #000;
  }
`;

const Hearts = styled(CardFront)`
  &:before,
  &:after {
    content: '♥';
    color: #ff0000;
  }
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

const cardComponent: React.SFC<Props> = ({ card, small = false }) => {
  const CardFrontWithSuit = getCardSuit(card.suit);

  const cardFlipped = css`
    transform: ${card.flipped ? 'none' : 'rotateY(180deg)'};
  `;

  const cardSize = css`
    width: ${small ? '5rem' : '10rem'};
    height: ${small ? '7.5rem' : '15rem'};
  `;

  const CardValue = styled('p')`
    font-size: ${small ? '3rem' : '6rem'};
  `;

  const cardSuitSize = css`
    font-size: ${small ? '1rem' : '3rem'};
  `;

  return (
    <Container className={cardSize}>
      <Card className={cardFlipped}>
        <CardFrontWithSuit className={cardSuitSize}>
          <CardValue>{card.display}</CardValue>
        </CardFrontWithSuit>
        <CardBack />
      </Card>
    </Container>
  );
};

export default cardComponent;
