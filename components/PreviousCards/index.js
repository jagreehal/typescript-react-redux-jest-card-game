import * as React from 'react';
import PlayingCard from '../../components/PlayingCard';
const PreviousCards = ({ previousCards = [] }) => {
    let cards = previousCards.slice(0).reverse().map((card, idx) => {
        return (React.createElement("li", { className: "dib", key: idx },
            React.createElement(PlayingCard, { card: card, small: true })));
    });
    return (React.createElement("div", { className: "mw-100 card-small-min-height" },
        React.createElement("ul", { className: "cards ma0 pa0 nowrap overflow-x-auto overflow-y-hidden" }, cards)));
};
export default PreviousCards;
//# sourceMappingURL=index.js.map