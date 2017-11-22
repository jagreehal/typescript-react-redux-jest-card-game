import { cards, flipCard, getShuffledCardsForGame } from '../../cards';
import { GameStatus, GuessResponse, Level } from '../../types';
export const initialState = {
    status: GameStatus.notStarted
};
const guess = (guess) => ({ guess, type: 'GUESS' });
const start = (level = Level.easy) => ({
    level,
    type: 'START_GAME'
});
const reset = () => ({ type: 'RESET_GAME' });
export const actions = {
    guess,
    reset,
    start
};
export function reducer(state = initialState, action) {
    switch (action.type) {
        case 'RESET_GAME':
            return {
                status: GameStatus.notStarted
            };
        case 'START_GAME':
            let cardsForGame;
            const level = action.level;
            switch (level) {
                case Level.hard:
                    cardsForGame = getShuffledCardsForGame(cards);
                    break;
                default:
                    cardsForGame = getShuffledCardsForGame(cards.slice(1, 9));
                    break;
            }
            return {
                currentCard: Object.assign({}, cardsForGame[0], { flipped: true }),
                level,
                previousCards: [],
                remainingCards: cardsForGame.slice(1),
                status: GameStatus.started
            };
        case 'GUESS':
            if (state.status === GameStatus.notStarted || !state.remainingCards) {
                return state;
            }
            if (!state.remainingCards.length) {
                return Object.assign({}, state, { status: GameStatus.won });
            }
            const nextCard = Object.assign({}, state.remainingCards[0], { flipped: true });
            const nextRemainingCards = state.remainingCards.slice(1);
            // flip the next card
            let guessIsOK;
            if (action.guess === GuessResponse.high) {
                guessIsOK = nextCard.value > state.currentCard.value;
            }
            else {
                guessIsOK = state.currentCard.value > nextCard.value;
            }
            if (!guessIsOK) {
                return Object.assign({}, state, { remainingCards: [nextCard].concat(nextRemainingCards), status: GameStatus.lost });
            }
            const hasWon = nextRemainingCards.length === 0 ? true : undefined;
            if (hasWon) {
                return Object.assign({}, state, { remainingCards: [nextCard], status: GameStatus.won });
            }
            return Object.assign({}, state, { currentCard: flipCard(nextCard), previousCards: state.previousCards.concat(state.currentCard), remainingCards: nextRemainingCards });
        default:
            return state;
    }
}
//# sourceMappingURL=game.js.map