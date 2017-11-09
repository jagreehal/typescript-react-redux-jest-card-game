import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Head from 'next/head';
import styled, { hydrate, keyframes, css, injectGlobal } from 'react-emotion';

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids);
}

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

export default () => {
  injectGlobal`
  html, body {    
    min-height: 100%;  
    padding: 0;  
    background: red;    
  }`;

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
