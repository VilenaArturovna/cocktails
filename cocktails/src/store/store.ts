import {applyMiddleware, combineReducers, createStore} from "redux";
import {appReducer} from "../reducers/reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    app: appReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootReducerType = typeof rootReducer
export type RootStateType = ReturnType<typeof rootReducer>