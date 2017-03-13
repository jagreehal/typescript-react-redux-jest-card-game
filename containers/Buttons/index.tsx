import * as React from 'react'; 
import { Card, GameState, GameStatus, Dispatch, AppState, Level, Guess } from "../../types";

import { connect } from 'react-redux';
import { actions } from '../../redux/modules/game';
import Start from '../../components/Start';
import PlayAgain from '../../components/PlayAgain';
import GuessComponent from '../../components/Guess';

type State = { 
  game: GameState
};

type Actions = {
  start: Dispatch,
  guessHigh: Dispatch,
  guessLow: Dispatch,
  reset: Dispatch
};

type Props = State & Actions;

const Buttons = ({ game, start, guessHigh, guessLow, reset }: Props) => {
  if (!game || game.status === GameStatus.notStarted) {
    return <Start startGame={start} />;
  }
  if (game.status === GameStatus.started) {
    return <GuessComponent guessHigh={guessHigh} guessLow={guessLow} />;
  }
  return <PlayAgain reset={reset}/>;
  
};

const mapStateToProps = (state: AppState): State => {
  return {
    game: state.game
  };
};

const mapDispatchToProps = (dispatch: Dispatch): Actions => {
  return {
    start: (level: Level) => {
      dispatch(actions.start(level));
    },
    guessHigh: () => {
      dispatch(actions.guess(Guess.high));
    },
    guessLow: () => {
      dispatch(actions.guess(Guess.low));    
    },
    reset: () => {
      dispatch(actions.reset());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
