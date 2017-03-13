import * as React from "react";
const cardComponent = ({ card, small = false }) => {
    const cardSuit = `ma0 front ${card.suit}`;
    const cardClass = "card" +
        (card.flipped ? "" : " showBack") +
        (small ? " small" : "");
    const front = (React.createElement("figure", { className: cardSuit },
        React.createElement("p", null, card.display)));
    const back = React.createElement("figure", { className: "ma0 back" });
    return (React.createElement("div", { className: cardClass }, card.flipped ? front : back));
};
export default cardComponent;
//# sourceMappingURL=index.js.map