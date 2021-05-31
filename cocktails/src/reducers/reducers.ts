import {Dispatch} from "redux";
import {API} from "../api/api";
import {DrinkType} from "../state/state";

type StateType = {
    drinks: Array<DrinkType>
}

const initialState: StateType = {
    drinks: []
}

export const appReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET-DRINK-BY-ID": {
            return {...state, drinks: [...state.drinks, action.drink]}
        }
        default: return state
    }
}
type ActionsType = ReturnType<typeof setDrinkByID>

export const setDrinkByID = (drink: DrinkType) => ({type: 'SET-DRINK-BY-ID', drink} as const)
export const getDrinkByID = (id: string) => async (dispatch: Dispatch) => {
    const res = await API.getDrinkByID(id)
    debugger
    dispatch(setDrinkByID(res.data.drinks[0]))
}