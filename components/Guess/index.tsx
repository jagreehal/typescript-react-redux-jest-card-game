import * as React from 'react';
import { Guess, GuessResponse } from '../../types';

export type Props = {
  guess: Guess
};

const GuessComponent = ({ guess }: Props) => {
  return (
    <div>
      <a
        id="guessHigh"
        className="f6 link ph4 pv4 black bg-light-blue mr5"
        onClick={() => guess(GuessResponse.high)}
      >
        &#9650; Higher
      </a>
      <a
        id="guessLow"
        className="f6 link ph4 pv4 white bg-dark-blue"
        onClick={() => guess(GuessResponse.low)}
      >
        &#9660; Lower
      </a>
    </div>
  );
};

export default GuessComponent;
