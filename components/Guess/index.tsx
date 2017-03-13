import * as React from 'react'; 
import { Dispatch } from "../../types";

export type Props = {
  guessHigh: Dispatch,
  guessLow: Dispatch
};

const Guess = ({ guessHigh, guessLow }: Props) => {
    return (
        <div>
          <a id="guessHigh" className="f6 link ph4 pv4 black bg-light-blue mr5" onClick={guessHigh}>&#9650; Higher</a>
          <a id="guessLow" className="f6 link ph4 pv4 white bg-dark-blue" onClick={guessLow}>&#9660; Lower</a>
        </div>
    )
};

export default Guess;

