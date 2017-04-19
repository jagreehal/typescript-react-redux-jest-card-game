import * as React from 'react'; 
import { Card, GameState, GameStatus, Dispatch, AppState, Level, Guess } from "../../types";

import { connect } from 'react-redux';
import { actions } from '../../redux/modules/game';

import Home from '../../components/Home';
import PreviousCards from '../../components/PreviousCards';
import Message from '../../components/Message';
import CurrentAndNext from '../../components/CurrentAndNext';

type Props = {
  game: GameState
};

export const Main = ({ game }: Props) => {
  if (!game || game.status === GameStatus.notStarted) {
    return <Home />;
  }
  let totalCards = game.previousCards.length + game.remainingCards.length + 1;

  return (
    <div className="mh-75 flex flex-column">
      <Message status={game.status} previousCards={game.previousCards} remainingCards={game.remainingCards} />
      <PreviousCards previousCards={game.previousCards} />
      <CurrentAndNext currentCard={game.currentCard} remainingCards={game.remainingCards} />       
    </div>
  );
};

const mapStateToProps = (state: AppState): Props => {
  return {
    game: state.game
  };
};

export default connect(mapStateToProps)(Main);