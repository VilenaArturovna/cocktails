import {Dispatch} from "redux";
import {drinkAPI, ingredientAPI, listAPI} from "../api/api";
import {DrinkMiniType, DrinkType} from "../state/state";
import {IngredientType} from "../components/Ingredient/Ingredient";

type StateType = {
    drinks: Array<DrinkType>
    drinksPreview: Array<DrinkMiniType>
    ingredients: Array<IngredientType>
    lists: Array<{strCategory: string }>
}

const initialState: StateType = {
    drinks: [],
    drinksPreview: [],
    ingredients: [],
    lists: []
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
        case "SET-DRINKS-BY-INGREDIENT": {
            return {...state, drinksPreview:action.drinks}
        }

        case "SET-LIST": {
            debugger
            return {...state, lists: action.lists}
        }
        default:
            return state
    }
}
type ActionsType = ReturnType<typeof setDrink>
    | ReturnType<typeof setIngredient>
    | ReturnType<typeof setFoundDrinks>
    | ReturnType<typeof setDrinksByIngredient>
    | ReturnType<typeof setList>

//Action Creators
export const setDrink = (drink: DrinkType) => ({type: 'SET-DRINK', drink} as const)
export const setIngredient = (ingredient: IngredientType) => ({type: 'SET-INGREDIENT', ingredient} as const)
export const setFoundDrinks = (drinks: Array<DrinkType>) => ({type: 'SET-FOUND-DRINKS', drinks} as const)
export const setDrinksByIngredient = (drinks: Array<DrinkMiniType>) => ({type: 'SET-DRINKS-BY-INGREDIENT', drinks} as const)
export const setList = (lists: Array<{strCategory: string }>) => ({type: 'SET-LIST', lists} as const)

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
    debugger
    const res = await drinkAPI.searchDrinks(word)
    dispatch(setFoundDrinks(res.data.drinks))
}
export const getDrinksByIngredient = (ingredient: string) => async (dispatch: Dispatch) => {
    const res = await drinkAPI.getDrinksByIngredient(ingredient)
    dispatch(setDrinksByIngredient(res.data.drinks))
}
export const getList = (letter: string) => async (dispatch: Dispatch) => {
    const res = await listAPI.getList(letter)
    debugger
    dispatch(setList(res.data.drinks))
}
