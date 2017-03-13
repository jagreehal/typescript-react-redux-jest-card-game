import * as React from 'react';
import PlayingCard from '../PlayingCard';
const CurrentAndNext = ({ currentCard, remainingCards }) => {
    let currentCardComponent = React.createElement("li", { className: "dib" },
        React.createElement(PlayingCard, { card: currentCard }));
    let nextCard;
    let answer;
    if (remainingCards.length) {
        nextCard = React.createElement("li", { className: "dib" },
            React.createElement(PlayingCard, { card: remainingCards[0] }));
    }
    return (React.createElement("ul", { className: "ph0 cards bt bb bw1 b--white pv3 flex justify-center mv3" },
        React.createElement("li", { className: "dib" },
            React.createElement(PlayingCard, { card: currentCard })),
        nextCard));
};
export default CurrentAndNext;
//# sourceMappingURL=index.js.map