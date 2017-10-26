import * as React from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';
import { GameStatus, Level } from '../types';
import App from '../components/App';
import configureStore from '../redux/configureStore';
import { cardAhearts, card2hearts, card3hearts } from '../cards';
let startedState = {
    game: {
        status: GameStatus.started,
        previousCards: [Object.assign({}, cardAhearts, { flipped: true })],
        currentCard: Object.assign({}, card2hearts, { flipped: true }),
        remainingCards: [card3hearts],
        level: Level.easy
    }
};
const store = configureStore();
export default function Index() {
    return (React.createElement("div", null,
        React.createElement(Head, null,
            React.createElement("title", null, "\u25B2 Higher or \u25BC Lower?"),
            React.createElement("meta", { charSet: "utf-8" }),
            React.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width" }),
            React.createElement("link", { href: "static/tachyons.css", media: "all", rel: "stylesheet" }),
            React.createElement("link", { href: "static/style.css", media: "all", rel: "stylesheet" })),
        React.createElement(Provider, { store: store },
            React.createElement(App, null))));
}
//# sourceMappingURL=index.js.map