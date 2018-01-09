import * as React from "react";
import LinkWithTriangle from "../LinkWithTriangle";
import { Level, Start } from "../../types";

export type Props = {
  start: Start
};

const StartGame = ({ start }: Props) => {
  return (
    <div>
      <LinkWithTriangle
        id="easy"
        action={() => start(Level.easy)}
        text="► Easy"
      />
      <LinkWithTriangle
        id="hard"
        bgColour="red"
        action={() => start(Level.hard)}
        text="► Hard"
      />
    </div>
  );
};

export default StartGame;
