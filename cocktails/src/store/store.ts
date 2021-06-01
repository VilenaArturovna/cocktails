import {applyMiddleware, combineReducers, createStore} from "redux";
import {drinkReducer} from "../reducers/drink-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    app: drinkReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootReducerType = typeof rootReducer
export type RootStateType = ReturnType<typeof rootReducer>