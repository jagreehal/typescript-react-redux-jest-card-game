import { Store as StoreType, Dispatch as DispatchType } from 'redux';

declare interface ObjectConstructor {
  assign(target: any, ...sources: any[]): any;
}

export type Card = {
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
};

export enum Level {
  'easy',
  'hard'
}

export type Cards = {
  readonly previousCards: Card[];
  readonly currentCard: Card;
  readonly remainingCards: Card[];
};

export enum GameStatus {
  'notStarted',
  'started',
  'won',
  'lost'
}

type GameNotStartedState = { readonly status: GameStatus.notStarted };

type GameStartedState = {
  readonly status: GameStatus.started | GameStatus.won | GameStatus.lost;
  readonly level: Level;
} & Cards;

export type GameState = GameNotStartedState | GameStartedState;

export type AppState = {
  readonly game: GameState;
};

export enum GuessResponse {
  'high',
  'low'
}

export interface StartGameAction {
  type: 'START_GAME';
  readonly level: Level;
}

export interface Start {
  (level: Level): StartGameAction;
}

export interface GuessAction {
  type: 'GUESS';
  readonly guess: GuessResponse;
}

export interface Guess {
  (guess: GuessResponse): GuessAction;
}

export interface ResetAction {
  type: 'RESET_GAME';
}

export interface Reset {
  (): ResetAction;
}

export type GameActions = StartGameAction | GuessAction | ResetAction;

export type Store = StoreType<AppState>;
