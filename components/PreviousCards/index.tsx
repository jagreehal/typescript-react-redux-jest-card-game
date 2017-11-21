import * as React from 'react'; 
import { Card } from "../../types";
import styled, { css } from 'react-emotion';

import PlayingCard from '../../components/PlayingCard';

export type Props = {
  readonly previousCards: Array<Card>
};

const Cards = styled('li')`
   margin-right: 1em;
   display: inline-block;
   &:last-child {
    margin-right: 0;
  }
`;

const PreviousCards = ({ previousCards = [] }: Props) => {
  let cards = previousCards.slice(0).reverse().map((card, idx) => {
    return (
      <Cards key={idx}>
        <PlayingCard card={card} small={true} />
      </Cards>
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
