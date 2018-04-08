import { cards, getShuffledCardsForGame } from '../../cards';
import {
  Card,
  GameActions,
  GameState,
  GameStatus,
  Guess,
  GuessResponse,
  Level,
  Reset,
  Start,
} from '../../types';

export const initialState: GameState = {
  status: GameStatus.notStarted,
};

const guess: Guess = (guessResponse: GuessResponse) => ({ guessResponse, type: 'GUESS' });

const start: Start = (level: Level = Level.easy) => ({
  level,
  type: 'START_GAME',
});
const reset: Reset = () => ({ type: 'RESET_GAME' });

export const actions = {
  guess,
  reset,
  start,
};

export function reducer(
  state: GameState = initialState,
  action: GameActions,
): GameState {
  switch (action.type) {
    case 'RESET_GAME':
      return {
        status: GameStatus.notStarted,
      };

    case 'START_GAME':
      let cardsForGame: Card[];
      const level: Level = action.level;
      switch (level) {
        case Level.hard:
          cardsForGame = getShuffledCardsForGame(cards);
          break;
        default:
          cardsForGame = getShuffledCardsForGame(cards.slice(1, 9));
          break;
      }

      return {
        currentCard: {...cardsForGame[0],  flipped: true},
        level,
        previousCards: [],
        remainingCards: cardsForGame.slice(1),
        status: GameStatus.started,
      };

    case 'GUESS':
      if (state.status === GameStatus.notStarted || !state.remainingCards) {
        return state;
      }

      if (!state.remainingCards.length) {
        return {...state,
                status: GameStatus.won,
              };
      }

      const nextCard = {...state.remainingCards[0],
                        flipped: true};

      const nextRemainingCards = state.remainingCards.slice(1);
      // flip the next card

      const guessIsOK = action.guessResponse === GuessResponse.high ?
      nextCard.value > state.currentCard.value : state.currentCard.value > nextCard.value;

      if (!guessIsOK) {
        return {...state,
                remainingCards: [nextCard].concat(nextRemainingCards),
                status: GameStatus.lost};
      }

      const hasWon = nextRemainingCards.length === 0 ? true : undefined;

      if (hasWon) {
        return {...state,
                remainingCards: [nextCard],
                status: GameStatus.won};
      }

      return {...state,
              currentCard: nextCard,
              previousCards: state.previousCards.concat(state.currentCard),
              remainingCards: nextRemainingCards};

    default:
      return state;
  }
}
