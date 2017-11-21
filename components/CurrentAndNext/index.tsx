import * as React from 'react'; 
import PlayingCard from '../PlayingCard';
import { Card } from "../../types";

import styled, { css } from 'react-emotion';

const Cards = styled('li')`
  margin-right: 1em;
  display: inline-block; 
`;

type Props = {
  currentCard: Card,
  readonly remainingCards: Array<Card>
};

const CurrentAndNext = ({ currentCard, remainingCards }: Props) => {
  let currentCardComponent = <li className="dib"><PlayingCard card={currentCard} /></li>;  
  let nextCard;
  let answer;
  if (remainingCards.length){
    nextCard = <Cards className="dib"><PlayingCard card={remainingCards[0]} /></Cards>;    
  }

  return (
    <ul className="ph0 bt bb bw1 b--white pv3 flex justify-center mv3">
      <Cards className="dib"><PlayingCard card={currentCard} /></Cards>          
      {nextCard}      
    </ul>    
  );
};

export default CurrentAndNext;
