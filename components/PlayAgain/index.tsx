import * as React from 'react';
import { Reset } from '../../types';
import LinkWithTriangle from "../LinkWithTriangle";

export type Props = {
  reset: Reset
};

const StartGame = ({ reset }: Props) => {
  return (
    <div className="tc">
      <LinkWithTriangle      
        id="playAgain"
        action={reset}
        text="► Play Again"
        bgColour="blue"
      />                
    </div>
  );
};

export default StartGame;
