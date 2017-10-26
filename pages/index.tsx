import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Head from 'next/head';
import { Card, GameState, GameStatus, AppState, Level, Store } from '../types';

import App from '../components/App';
import configureStore from '../redux/configureStore';
import { cardAhearts, card2hearts, card3hearts } from '../cards';

let startedState: AppState = {
  game: {
    status: GameStatus.started,
    previousCards: [Object.assign({}, cardAhearts, { flipped: true })],
    currentCard: Object.assign({}, card2hearts, { flipped: true }),
    remainingCards: [card3hearts],
    level: Level.easy
  }
};

const store: Store = configureStore();

export default function Index() {
  return (
    <div>
      <Head>
        <title>▲ Higher or ▼ Lower?</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="static/tachyons.css" media="all" rel="stylesheet" />
        <link href="static/style.css" media="all" rel="stylesheet" />
      </Head>
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  );
}
