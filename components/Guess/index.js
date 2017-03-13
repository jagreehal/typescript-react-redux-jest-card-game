import * as React from 'react';
const Guess = ({ guessHigh, guessLow }) => {
    return (React.createElement("div", null,
        React.createElement("a", { id: "guessHigh", className: "f6 link ph4 pv4 black bg-light-blue mr5", onClick: guessHigh }, "\u25B2 Higher"),
        React.createElement("a", { id: "guessLow", className: "f6 link ph4 pv4 white bg-dark-blue", onClick: guessLow }, "\u25BC Lower")));
};
export default Guess;
//# sourceMappingURL=index.js.map