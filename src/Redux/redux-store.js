import { combineReducers, createStore } from "redux";
import GameReducer from "./Game-reducer";

let reducers = combineReducers({
    GameReducer: GameReducer,
});
const store = createStore(reducers);

window._store_ = store;
export default store;