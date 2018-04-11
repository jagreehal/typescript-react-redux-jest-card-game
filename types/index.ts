import { Store as StoreType } from 'redux';

export interface Card {
  readonly value: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
  readonly display:
    | 'A'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | 'J'
    | 'Q'
    | 'K';
  readonly suit: 'diamonds' | 'hearts' | 'clubs' | 'spades';
  readonly flipped: boolean;
}

export enum Level {
  'easy',
  'hard',
}

export interface Cards {
  readonly previousCards: Card[];
  readonly currentCard: Card;
  readonly remainingCards: Card[];
}

export enum GameStatus {
  notStarted = 'notStarted',
  started = 'started',
  won = 'won',
  lost = 'lost',
}

interface GameNotStartedState {
  readonly status: GameStatus.notStarted;
}

type GameStartedState = {
  readonly status: GameStatus.started | GameStatus.won | GameStatus.lost;
  readonly level: Level;
} & Cards;

export type GameState = GameNotStartedState | GameStartedState;

export interface AppState {
  readonly game: GameState;
}

export enum GuessResponse {
  'high',
  'low',
}

export interface StartGameAction {
  type: 'START_GAME';
  readonly level: Level;
}

export type Start = (level: Level) => StartGameAction;

export interface GuessAction {
  type: 'GUESS';
  readonly guessResponse: GuessResponse;
}

export type Guess = (guessResponse: GuessResponse) => GuessAction;

export interface ResetAction {
  type: 'RESET_GAME';
}

export type Reset = () => ResetAction;

export type GameActions = StartGameAction | GuessAction | ResetAction;

export type Store = StoreType<AppState>;
