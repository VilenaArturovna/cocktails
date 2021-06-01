import {Dispatch} from "redux";
import {drinkAPI, ingredientAPI, SizeIngredientPhotoType} from "../api/api";
import {DrinkType} from "../state/state";
import {IngredientEntityType, IngredientType} from "../components/Ingredient";

type StateType = {
    drinks: Array<DrinkType>
    ingredients: Array<IngredientEntityType>
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
        default:
            return state
    }
}
type ActionsType = ReturnType<typeof setDrink> | ReturnType<typeof setIngredient>

//Action Creators
export const setDrink = (drink: DrinkType) => ({type: 'SET-DRINK', drink} as const)
export const setIngredient = (ingredient: IngredientEntityType) => ({type: 'SET-INGREDIENT', ingredient} as const)


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
    const info = ingredientAPI.getIngredientByName(name)
    const photo = ingredientAPI.getPhotoIngredient(name, '-Small')
    const res = await Promise.all([info, photo])
    const ingr = res[0].data.ingredients[0]
    const photoIngr = res[1].data

    const ingredient: IngredientEntityType = {
        idIngredient: ingr.idIngredient,
        strIngredient: ingr.strIngredient,
        strDescription: ingr.strDescription,
        strABV: ingr.strABV,
        strAlcohol: ingr.strAlcohol,
        strType: ingr.strType,
        photo: photoIngr}
    console.log(photoIngr)
    debugger
    dispatch(setIngredient(ingredient))

}
