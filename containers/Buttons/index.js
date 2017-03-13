import * as React from 'react';
import { GameStatus, Guess } from "../../types";
import { connect } from 'react-redux';
import { actions } from '../../redux/modules/game';
import Start from '../../components/Start';
import PlayAgain from '../../components/PlayAgain';
import GuessComponent from '../../components/Guess';
const Buttons = ({ game, start, guessHigh, guessLow, reset }) => {
    if (!game || game.status === GameStatus.notStarted) {
        return React.createElement(Start, { startGame: start });
    }
    if (game.status === GameStatus.started) {
        return React.createElement(GuessComponent, { guessHigh: guessHigh, guessLow: guessLow });
    }
    return React.createElement(PlayAgain, { reset: reset });
};
const mapStateToProps = (state) => {
    return {
        game: state.game
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        start: (level) => {
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
//# sourceMappingURL=index.js.map