import * as React from 'react';
const StartGame = ({ reset }) => {
    return (React.createElement("div", null,
        React.createElement("a", { id: "playAgain", className: "f6 link ph6 ph7-ns pv4 white bg-blue", onClick: reset },
            React.createElement("span", { className: "right-pointing-triangle" }, "\u00A0"),
            " Play Again")));
};
export default StartGame;
//# sourceMappingURL=index.js.map