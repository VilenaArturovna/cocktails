import {Dispatch} from "redux";
import {drinkAPI, ingredientAPI} from "../api/api";
import {DrinkType} from "../state/state";
import {IngredientType} from "../components/Ingredient";

type StateType = {
    drinks: Array<DrinkType>
    ingredients: Array<IngredientType>
}

const initialState: StateType = {
    drinks: [],
    ingredients: []
}

export const drinkReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET-DRINK": {
            return {...state, drinks: [...state.drinks, action.drink]}
        }
        case "SET-INGREDIENT": {
            return {...state, ingredients: [...state.ingredients, action.ingredient]}
        }
        case "SET-FOUND-DRINKS": {
            return {...state, drinks: action.drinks}
        }
        default:
            return state
    }
}
type ActionsType = ReturnType<typeof setDrink> | ReturnType<typeof setIngredient> | ReturnType<typeof setFoundDrinks>

//Action Creators
export const setDrink = (drink: DrinkType) => ({type: 'SET-DRINK', drink} as const)
export const setIngredient = (ingredient: IngredientType) => ({type: 'SET-INGREDIENT', ingredient} as const)
export const setFoundDrinks = (drinks: Array<DrinkType>) => ({type: 'SET-FOUND-DRINKS', drinks} as const)


//Thunk Creators
export const getDrinkByID = (id: string) => async (dispatch: Dispatch) => {
    const res = await drinkAPI.getDrinkByID(id)
    dispatch(setDrink(res.data.drinks[0]))
}
export const getRandomDrink = () => async (dispatch: Dispatch) => {
    const res = await drinkAPI.getRandomDrink()
    dispatch(setDrink(res.data.drinks[0]))
}
export const getIngredientTC = (name: string) => async (dispatch: Dispatch) => {
    const res = await ingredientAPI.getIngredientByName(name)
    dispatch(setIngredient(res.data.ingredients[0]))
}
export const searchDrinksTC = (word: string) => async (dispatch: Dispatch) => {
    const res = await drinkAPI.searchDrinks(word)
    dispatch(setFoundDrinks(res.data.drinks))
}
