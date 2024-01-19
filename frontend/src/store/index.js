import {applyMiddleware, combineReducers, createStore} from "redux";
import {thunk} from 'redux-thunk'
import {todosReducer} from "./todosReducer";


const rootReducer = combineReducers({
    todos: todosReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))