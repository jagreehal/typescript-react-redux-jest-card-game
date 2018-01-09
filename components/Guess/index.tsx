import * as React from 'react';
import LinkWithTriangle from "../LinkWithTriangle";
import { Guess, GuessResponse } from '../../types';

export type Props = {
  guess: Guess
};

const GuessComponent = ({ guess }: Props) => {
  return (
    <div>
       <LinkWithTriangle
        id="guessHigh"
        action={() => guess(GuessResponse.high)}
        text="▲ Higher"
        bgColour="light-blue"
      />
      <LinkWithTriangle
        id="guessLow"
        action={() => guess(GuessResponse.low)}
        text="▼ Lower"
        bgColour="dark-blue"
      />      
    </div>
  );
};

export default GuessComponent;
