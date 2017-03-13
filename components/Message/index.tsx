import * as React from 'react'; 
import { Card, GameStatus } from "../../types";

export type Props = {
  status: GameStatus,
  readonly previousCards: Array<Card>,
  readonly remainingCards: Array<Card>
};

const Message = ({ status, previousCards, remainingCards }: Props) => {
  let message = '';
  let total = remainingCards.length + previousCards.length + 1;
  switch (status) {
    case GameStatus.won:
      message = `WINNER - You guessed all ${total} cards`;
      break;
    case GameStatus.lost:
      message = `OH NO! - You guessed ${previousCards.length + 1} / ${total} cards`;
      break;
    default:
      message = `Cards Played: ${previousCards.length + 1} / ${total}`;
  }

  return (
    <div className="mw-100 flex justify-center items-center f4 f3-ns mv3 white">
      <span>{message}</span>
    </div>
  );
};

export default Message;

