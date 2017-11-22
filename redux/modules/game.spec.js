import { card2hearts, card3hearts, cardAhearts, flipCard } from '../../cards';
import { GameStatus, GuessResponse, Level } from '../../types';
import { actions, initialState, reducer } from './game';
describe('Game reducer', () => {
    it('can start game', () => {
        const result = reducer(initialState, {
            type: 'START_GAME',
            level: Level.easy
        });
        if (result.status === GameStatus.notStarted) {
            expect(result.status).toBe('started');
            return false;
        }
        expect(result.previousCards.length).toBe(0);
        expect(result.remainingCards.length).toBeTruthy();
        expect(result.currentCard).toBeTruthy();
    });
    it('can play ok to win', () => {
        const card1 = cardAhearts;
        const card2 = card2hearts;
        const gameState = {
            previousCards: [],
            currentCard: flipCard(card1),
            remainingCards: [card2],
            status: GameStatus.started,
            level: Level.easy
        };
        const result = reducer(gameState, actions.guess(GuessResponse.high));
        if (result.status === GameStatus.notStarted) {
            expect(result.status).toBe('started');
            return false;
        }
        const remainingCard = result.remainingCards[0];
        expect(result.previousCards.length).toBe(0);
        expect(remainingCard.value).toBe(2);
        expect(remainingCard.flipped).toBeTruthy();
        expect(result.currentCard.value).toBe(1);
        expect(result.status).toBe('won');
    });
    it('can play mid game', () => {
        const card1 = cardAhearts;
        const card2 = card2hearts;
        const card3 = card3hearts;
        const gameState = {
            previousCards: [],
            currentCard: flipCard(card1),
            remainingCards: [card2, card3],
            status: GameStatus.started,
            level: Level.easy
        };
        const result = reducer(gameState, actions.guess(GuessResponse.high));
        if (result.status === GameStatus.notStarted) {
            expect(result.status).toBe('started');
            return false;
        }
        expect(result.previousCards.length).toBe(1);
        expect(result.remainingCards.length).toBe(1);
        expect(result.currentCard.value).toBe(2);
        expect(result.status).toBe(GameStatus.started);
    });
    it('can play bad card', () => {
        const card1 = cardAhearts;
        const card2 = card2hearts;
        const card3 = card3hearts;
        const gameState = {
            currentCard: flipCard(card1),
            level: Level.easy,
            previousCards: [],
            remainingCards: [card2],
            status: GameStatus.started,
        };
        const result = reducer(gameState, actions.guess(GuessResponse.low));
        if (result.status === GameStatus.notStarted) {
            expect(result.status).toBe('started');
            return false;
        }
        expect(result.previousCards.length).toBe(0);
        expect(result.remainingCards.length).toBe(1);
        expect(result.currentCard ? result.currentCard.value : null).toBe(1);
        expect(result.status).toBe('lost');
    });
});
//# sourceMappingURL=game.spec.js.map