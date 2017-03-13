import * as React from 'react'; 
import { Card } from "../../types";

import PlayingCard from '../../components/PlayingCard';

export type Props = {
  readonly previousCards: Array<Card>
};

const PreviousCards = ({ previousCards = [] }: Props) => {
  let cards = previousCards.slice(0).reverse().map((card, idx) => {
    return (
      <li className="dib" key={idx}>
        <PlayingCard card={card} small={true} />
      </li>
    );
  });

  return (
    <div className="mw-100 card-small-min-height">
      <ul className="cards ma0 pa0 nowrap overflow-x-auto overflow-y-hidden">
        {cards}
      </ul>
    </div>
  );
};

export default PreviousCards;
