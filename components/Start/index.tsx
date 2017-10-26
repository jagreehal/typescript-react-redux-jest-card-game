import * as React from 'react';
import { Level, Start } from '../../types';

export type Props = {
  start: Start
};

const StartGame = ({ start }: Props) => {
  return (
    <div>
      <a
        id="easy"
        className="f6 link ph4 pv4 black bg-yellow mr5"
        onClick={() => start(Level.easy)}
      >
        <span className="right-pointing-triangle">&nbsp;</span> Easy
      </a>
      <a
        id="hard"
        className="f6 link ph4 pv4 black bg-red"
        onClick={() => start(Level.hard)}
      >
        <span className="right-pointing-triangle">&nbsp;</span> Hard
      </a>
    </div>
  );
};

export default StartGame;
