import * as React from "react";
import { Level } from "../../types";
const StartGame = ({ startGame }) => {
    return (React.createElement("div", null,
        React.createElement("a", { id: "easy", className: "f6 link ph4 pv4 black bg-yellow mr5", onClick: () => startGame(Level.easy) },
            React.createElement("span", { className: "right-pointing-triangle" }, "\u00A0"),
            " Easy"),
        React.createElement("a", { id: "hard", className: "f6 link ph4 pv4 black bg-red", onClick: () => startGame(Level.hard) },
            React.createElement("span", { className: "right-pointing-triangle" }, "\u00A0"),
            " Hard")));
};
export default StartGame;
//# sourceMappingURL=index.js.map