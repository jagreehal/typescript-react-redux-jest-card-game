import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Head from 'next/head';
import { hydrate, injectGlobal } from 'react-emotion';

if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids);
}

import { Card, GameState, GameStatus, AppState, Level, Store } from '../types';

import App from '../components/App';
import configureStore from '../redux/configureStore';
import { cardAhearts, card2hearts, card3hearts, flipCard } from '../cards';

let startedState: AppState = {
  game: {
    status: GameStatus.started,
    previousCards: [flipCard(cardAhearts)],
    currentCard: flipCard(card2hearts),
    remainingCards: [card3hearts],
    level: Level.easy
  }
};

const store: Store = configureStore();

export default () => {
  injectGlobal`
  html, body {    
    background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMTM3NzUyIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMOCA4Wk04IDBMMCA4WiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9ImdyZWVuIj48L3BhdGg+Cjwvc3ZnPg==');
    height: 100%;
    width: 100%;
  }`;

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
