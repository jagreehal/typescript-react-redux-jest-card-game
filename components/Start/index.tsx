import * as React from "react";
import { Level } from "../../types";
export type Props = {
  startGame: (level: Level) => void
};

const StartGame = ({ startGame }: Props) => {
  return (
    <div>
      <a id="easy" className="f6 link ph4 pv4 black bg-yellow mr5" onClick={()=> startGame(Level.easy)}>
        <span className="right-pointing-triangle">&nbsp;</span> Easy
      </a>
      <a id="hard" className="f6 link ph4 pv4 black bg-red" onClick={()=> startGame(Level.hard)}>
       <span className="right-pointing-triangle">&nbsp;</span> Hard
      </a>      
    </div>
  );
};

export default StartGame;
