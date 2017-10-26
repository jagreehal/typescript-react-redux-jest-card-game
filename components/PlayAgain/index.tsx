import * as React from 'react';
import { Reset } from '../../types';

export type Props = {
  reset: Reset
};

const StartGame = ({ reset }: Props) => {
  return (
    <div>
      <a
        id="playAgain"
        className="f6 link ph6 ph7-ns pv4 white bg-blue"
        onClick={reset}
      >
        <span className="right-pointing-triangle">&nbsp;</span> Play Again
      </a>
    </div>
  );
};

export default StartGame;
