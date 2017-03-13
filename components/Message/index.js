import * as React from 'react';
import { GameStatus } from "../../types";
const Message = ({ status, previousCards, remainingCards }) => {
    let message = '';
    let total = remainingCards.length + previousCards.length + 1;
    switch (status) {
        case GameStatus.won:
            message = `WINNER - You guessed all ${total} cards`;
            break;
        case GameStatus.lost:
            message = `OH NO! - You guessed ${previousCards.length + 1} / ${total} cards`;
            break;
        default:
            message = `Cards Played: ${previousCards.length + 1} / ${total}`;
    }
    return (React.createElement("div", { className: "mw-100 flex justify-center items-center f4 f3-ns mv3 white" },
        React.createElement("span", null, message)));
};
export default Message;
//# sourceMappingURL=index.js.map