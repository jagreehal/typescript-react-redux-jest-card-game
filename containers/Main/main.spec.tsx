import * as React from 'react';
import Main from './index';
import { mount } from '../../test';
const configureStore = require('redux-mock-store');
import { Provider } from 'react-redux';

import Home from '../../components/Home';
import PreviousCards from '../../components/PreviousCards';
import Message from '../../components/Message';
import CurrentAndNext from '../../components/CurrentAndNext';

import { Card, Level, GameStatus, AppState } from '../../types';

describe('Main tests', () => {
  const mockStore = configureStore();
  describe('Will render Home', () => {
    it(' when there is no game', () => {
      const store = mockStore();
      const wrapper = mount(
        <Provider store={store}>
          <Main />
        </Provider>
      );
      expect(wrapper.find(Home).length).toBe(1);
    });

    it('when game is notStarted', () => {
      const state: AppState = {
        game: { status: GameStatus.notStarted }
      };
      const store = mockStore(state);
      const wrapper = mount(
        <Provider store={store}>
          <Main />
        </Provider>
      );
      expect(wrapper.find(Home).length).toBe(1);
    });
  });

  it('Will render correct components when game is started', () => {
    const card: Card = {
      value: 1,
      suit: 'hearts',
      display: 'A',
      flipped: false
    };
    const state: AppState = {
      game: {
        status: GameStatus.started,
        previousCards: [],
        remainingCards: [],
        currentCard: card,
        level: Level.easy
      }
    };
    const store = mockStore(state);
    const wrapper = mount(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    expect(wrapper.find(Message).length).toBe(1);
    expect(wrapper.find(PreviousCards).length).toBe(1);
    expect(wrapper.find(CurrentAndNext).length).toBe(1);
  });
});
