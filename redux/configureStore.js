import { createStore, applyMiddleware, combineReducers } from "redux";
const { createLogger } = require("redux-logger");
import { reducer as game } from "./modules/game";
const loggerMiddleware = createLogger();
const reducer = combineReducers({
    game
});
const configureStore = (initialState) => {
    return createStore(reducer, initialState, applyMiddleware(loggerMiddleware));
};
export default configureStore;
//# sourceMappingURL=configureStore.js.map