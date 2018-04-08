import * as React from "react";
import Buttons from "./index";
import { mount } from "../../test";
const configureStore = require("redux-mock-store");
import Start from "../../components/Start";
import GuessComponent from "../../components/Guess";
import { actions } from "../../redux/modules/game";
import { cardAclubs } from "../../cards";
import { Provider } from "react-redux";

import { GuessResponse, Level, GameStatus, AppState } from "../../types";

describe("Main tests", () => { 
  const mockStore = configureStore();
  describe("Start action should", () => {
    it(" call start action", () => {
      const store = mockStore();
      const wrapper = mount(
        <Provider store={store}>
          <Buttons />
        </Provider>
      );
      let startComponent = wrapper.find(Start);

      expect(startComponent).toBeDefined();
      startComponent.props().start(Level.easy);

      expect(store.getActions()).toEqual([actions.start(Level.easy)]);
    });
  });

  describe("Guess actions should ", () => {
    const state: AppState = {
      game: {
        status: GameStatus.started,
        previousCards: [],
        remainingCards: [],
        currentCard: cardAclubs,
        level: Level.easy
      }
    };

    let store;
    let guessComponentProps;

    beforeEach(() => {
      store = mockStore(state);
      const wrapper = mount(
        <Provider store={store}>
          <Buttons />
        </Provider>
      );
      guessComponentProps = wrapper.find(GuessComponent).props();
    });

    it("Will render correct components when game is started", () => {
      expect(guessComponentProps).toBeDefined();
    });

    it("Will call correct action when starting the game in high level", () => {
      guessComponentProps.guess(GuessResponse.high);
      expect(store.getActions()).toEqual([actions.guess(GuessResponse.high)]);
    });

    it("Will call correct action when starting the game in low level", () => {
      guessComponentProps.guess(GuessResponse.low);
      expect(store.getActions()).toEqual([actions.guess(GuessResponse.low)]);
    });
  });

  describe("Play again action should ", () => {
    it("call reset action", () => {
      const state: AppState = {
        game: {
          status: GameStatus.won,
          previousCards: [],
          remainingCards: [],
          currentCard: cardAclubs,
          level: Level.easy
        }
      };
      const store = mockStore(state);
      const wrapper = mount(
        <Provider store={store}>
          <Buttons />
        </Provider>
      );
      // let playAgainComponent = wrapper.find(PlayAgain);
      // expect(playAgainComponent).toBeDefined();
      wrapper.find("#playAgain").simulate("click");

      expect(store.getActions()).toEqual([actions.reset()]);
    });
  });
});
