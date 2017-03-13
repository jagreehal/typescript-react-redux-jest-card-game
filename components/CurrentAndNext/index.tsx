import * as React from 'react'; 
import PlayingCard from '../PlayingCard';
import { Card } from "../../types";

type Props = {
  currentCard: Card,
  readonly remainingCards: Array<Card>
};

const CurrentAndNext = ({ currentCard, remainingCards }: Props) => {
  let currentCardComponent = <li className="dib"><PlayingCard card={currentCard} /></li>;  
  let nextCard;
  let answer;
  if (remainingCards.length){
    nextCard = <li className="dib"><PlayingCard card={remainingCards[0]} /></li>;    
  }

  return (
    <ul className="ph0 cards bt bb bw1 b--white pv3 flex justify-center mv3">
      <li className="dib"><PlayingCard card={currentCard} /></li>          
      {nextCard}      
    </ul>    
  );
};

export default CurrentAndNext;
