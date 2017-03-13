import { Guess, Level, GameStatus } from "../../types";
import { cards, getShuffledCardsForGame } from "../../cards";
export const initialState = {
    status: GameStatus.notStarted
};
export const actions = {
    guess: (guess) => ({ type: "GUESS", guess }),
    start: (level = Level.easy) => ({
        type: "START_GAME",
        level
    }),
    reset: () => ({ type: "RESET_GAME" })
};
export function reducer(state = initialState, action) {
    switch (action.type) {
        case "RESET_GAME":
            return {
                status: GameStatus.notStarted
            };
        case "START_GAME":
            let cardsForGame;
            let level = action.level;
            switch (level) {
                case Level.hard:
                    cardsForGame = getShuffledCardsForGame(cards);
                    break;
                default:
                    cardsForGame = getShuffledCardsForGame(cards.slice(1, 9));
                    break;
            }
            return {
                status: GameStatus.started,
                previousCards: [],
                currentCard: Object.assign({}, cardsForGame[0], { flipped: true }),
                remainingCards: cardsForGame.slice(1),
                level
            };
        case "GUESS":
            if (state.status === GameStatus.notStarted || !state.remainingCards) {
                return state;
            }
            if (!state.remainingCards.length) {
                return Object.assign({}, state, {
                    status: "won",
                    hasWon: true
                });
            }
            let nextCard = Object.assign({}, state.remainingCards[0], {
                flipped: true
            });
            let nextRemainingCards = state.remainingCards.slice(1);
            // flip the next card
            let guessIsOK = false;
            if (action.guess === Guess.high) {
                guessIsOK = nextCard.value > state.currentCard.value;
            }
            else {
                guessIsOK = state.currentCard.value > nextCard.value;
            }
            if (!guessIsOK) {
                return Object.assign({}, state, {
                    remainingCards: [nextCard].concat(nextRemainingCards),
                    status: "lost"
                });
            }
            let hasWon = nextRemainingCards.length === 0 ? true : undefined;
            if (hasWon) {
                return Object.assign({}, state, {
                    remainingCards: [nextCard],
                    status: "won"
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
//# sourceMappingURL=game.js.map