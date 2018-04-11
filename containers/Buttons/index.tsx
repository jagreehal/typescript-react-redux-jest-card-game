import * as React from 'react';
import {
  GameActions,
  GameState,
  GameStatus,
  AppState,
  Level,
  GuessResponse,
  Guess,
  Reset,
  Start,

} from '../../types';

import { connect, Dispatch } from 'react-redux';
import { actions } from '../../redux/modules/game';
import StartComponent from '../../components/Start';
import PlayAgain from '../../components/PlayAgain';
import GuessComponent from '../../components/Guess';

type Actions = {
  start: Start
  guess: Guess
  reset: Reset
};

type State = {
  game : GameState
}

type Props = State & Actions;

const Buttons = ({ game, start, guess, reset }: Props) => {
  if (!game || game.status === GameStatus.notStarted) {
    return <StartComponent start={start} />;
  }
  if (game.status === GameStatus.started) {
    return <GuessComponent guess={guess}  />;
  }
  return <PlayAgain reset={reset} />;
};

const mapStateToProps = (state: AppState): State => {
  return {
    game: state.game
  };
};

const mapDispatchToProps = (dispatch: Dispatch<GameActions>): Actions => {
  const start :Start = (level: Level = Level.easy) => dispatch(actions.start(level));
  const guess :Guess = (guess: GuessResponse) => dispatch(actions.guess(guess));
  const reset :Reset = () => dispatch(actions.reset());

  return {
    start,
    guess,
    reset
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
