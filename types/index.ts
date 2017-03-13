import { Store as StoreType, Dispatch as DispatchType } from 'redux';

declare interface ObjectConstructor {
    assign(target: any, ...sources: any[]): any;
}

export type Card = {    
  readonly value: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13,
  readonly display: | 'A'
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
    | 'K',
    readonly suit: 'diamonds' | 'hearts' | 'clubs' | 'spades',
    readonly flipped: boolean
};

export enum Level { 'easy', 'hard'}

export type Cards = {
  readonly previousCards: Array<Card>,
  readonly  currentCard: Card,
  readonly remainingCards: Array<Card>  
};

export enum GameStatus { 'notStarted' ,'started','won', 'lost'};


export type GameState = { readonly  status: GameStatus.notStarted }
  | { 
      readonly status: GameStatus.started | GameStatus.won | GameStatus.lost,
      readonly  level: Level 
    } & Cards;

export type AppState = {
  readonly  game: GameState
};

export enum Guess { 'high', 'low'};

export type GameAction =
   { type: 'START_GAME', readonly level: Level }
  | { type: 'GUESS', readonly  guess: Guess }
  | { type: 'RESET_GAME' };

export type Store = StoreType<AppState>;

export type Dispatch = DispatchType<GameAction>;
