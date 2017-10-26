import {
  Card,
  GuessResponse,
  GameActions,
  GameState,
  Level,
  GameStatus,
  Guess,
  Start,
  Reset
} from '../../types';
import { cards, getShuffledCardsForGame } from '../../cards';

export const initialState: GameState = {
  status: GameStatus.notStarted
};

const guess: Guess = (guess: GuessResponse) => ({ guess, type: 'GUESS' });
const start: Start = (level: Level = Level.easy) => ({
  level,
  type: 'START_GAME'
});
const reset: Reset = () => ({ type: 'RESET_GAME' });

export const actions = {
  guess,
  start,
  reset
};

export function reducer(
  state: GameState = initialState,
  action: GameActions
): GameState {
  switch (action.type) {
    case 'RESET_GAME':
      return {
        status: GameStatus.notStarted
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
        level,
        status: GameStatus.started,
        previousCards: [],
        currentCard: Object.assign({}, cardsForGame[0], { flipped: true }),
        remainingCards: cardsForGame.slice(1)
      };

    case 'GUESS':
      if (state.status === GameStatus.notStarted || !state.remainingCards) {
        return state;
      }

      if (!state.remainingCards.length) {
        return Object.assign({}, state, {
          status: 'won',
          hasWon: true
        });
      }

      const nextCard = Object.assign({}, state.remainingCards[0], {
        flipped: true
      });

      const nextRemainingCards = state.remainingCards.slice(1);
      // flip the next card

      let guessIsOK = false;
      if (action.guess === GuessResponse.high) {
        guessIsOK = nextCard.value > state.currentCard.value;
      } else {
        guessIsOK = state.currentCard.value > nextCard.value;
      }

      if (!guessIsOK) {
        return Object.assign({}, state, {
          remainingCards: [nextCard].concat(nextRemainingCards),
          status: 'lost'
        });
      }

      const hasWon = nextRemainingCards.length === 0 ? true : undefined;

      if (hasWon) {
        return Object.assign({}, state, {
          remainingCards: [nextCard],
          status: 'won'
        });
      }

      return Object.assign({}, state, {
        previousCards: state.previousCards.concat(state.currentCard),
        currentCard: nextCard,
        remainingCards: nextRemainingCards
      });

    default:
      return state;
  }
}
