import * as React from 'react';
import { GameStatus } from "../../types";
import { connect } from 'react-redux';
import Home from '../../components/Home';
import PreviousCards from '../../components/PreviousCards';
import Message from '../../components/Message';
import CurrentAndNext from '../../components/CurrentAndNext';
const Main = ({ game }) => {
    if (!game || game.status === GameStatus.notStarted) {
        return React.createElement(Home, null);
    }
    let totalCards = game.previousCards.length + game.remainingCards.length + 1;
    return (React.createElement("div", { className: "mh-75 flex flex-column" },
        React.createElement(Message, { status: game.status, previousCards: game.previousCards, remainingCards: game.remainingCards }),
        React.createElement(PreviousCards, { previousCards: game.previousCards }),
        React.createElement(CurrentAndNext, { currentCard: game.currentCard, remainingCards: game.remainingCards })));
};
const mapStateToProps = (state) => {
    return {
        game: state.game
    };
};
export default connect(mapStateToProps)(Main);
//# sourceMappingURL=index.js.map