// // @flow

// import * as React from "react";
// import Buttons from './index';
// import { mount } from 'enzyme';
// import configureStore from 'redux-mock-store';
// import Start from '../../components/Start';
// import PlayAgain from '../../components/PlayAgain';
// import GuessComponent from '../../components/Guess';
// import { actions } from '../../redux/modules/game';
// import { cardAclubs } from '../../cards';

// import {
//   Card,
//   Guess,
//   Level,
//   GameStatus,
//   AppState
// } from "../../types";

// describe('Main tests', () => {
//   const mockStore = configureStore();
//   describe('Start action should', () => {
//     it(' call start action', () => {
//       const store = mockStore();
//       const wrapper = mount(<Buttons store={store} />);
//       let startComponent = wrapper.find(Start);

//       expect(startComponent).toBeDefined();

//       startComponent.props().startGame();
//       expect(store.getActions()).toEqual([actions.start()]);
//     });
//   });

//   describe('Guess actions should ', () => {
//     const state: AppState = {
//       game: {
//         status: GameStatus.started,
//         previousCards: [],
//         remainingCards: [],
//         currentCard: cardAclubs,
//         level: Level.easy
//       }
//     };

//     let store;
//     let wrapper;
//     let guessComponentProps;

//     beforeEach(() => {
//       store = mockStore(state);
//       wrapper = mount(<Buttons store={store} />);
//       guessComponentProps = wrapper.find(GuessComponent).props();
//     });

//     it('Will render correct components when game is started', () => {
//       expect(guessComponentProps).toBeDefined();
//     });

//     it('Will call correct action when starting the game in high level', () => {
//       guessComponentProps.guessHigh();
//       expect(store.getActions()).toEqual([actions.guess(Guess.high)]);
//     });

//     it('Will call correct action when starting the game in low level', () => {
//       guessComponentProps.guessLow();
//       expect(store.getActions()).toEqual([actions.guess(Guess.low)]);
//     });
//   });

//   describe('Play again action should ', () => {
//     it('call reset action', () => {
//       const state: AppState = {
//         game: {
//           status: 'won',
//           previousCards: [],
//           remainingCards: [],
//           currentCard: cardAclubs,
//           level: 'easy'
//         }
//       };
//       const store = mockStore(state);
//       const wrapper = mount(<Buttons store={store} />);
//       let playAgainComponent = wrapper.find(PlayAgain);
//       expect(playAgainComponent).toBeDefined();

//       playAgainComponent.props().reset();
//       expect(store.getActions()).toEqual([actions.reset()]);
//     });
//   });
// });
