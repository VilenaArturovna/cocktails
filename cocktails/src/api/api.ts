import axios from "axios";
import {DrinkType} from "../state/state";
import {IngredientType} from "../components/Ingredient";

const instance = axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1'
})

export const drinkAPI = {
    getDrinkByID(id: string) {
        return instance.get<{ drinks: Array<DrinkType> }>('/lookup.php?i=' + id)
    },
    getRandomDrink() {
        return instance.get<{ drinks: Array<DrinkType> }>('/random.php')
    },
    searchDrinks(word: string) {
        return instance.get<{ drinks: Array<DrinkType> }>('/search.php?s=' + word)
    }
}

export type SizeIngredientPhotoType = '-Small' | '-Medium' | ''
export const ingredientAPI = {
    getIngredientByID(id: string) {
        return instance.get<{ ingredients: Array<IngredientType> }>('/lookup.php?iid=' + id)
    },
    getIngredientByName(name: string) {
        return instance.get<{ ingredients: Array<IngredientType> }>('/search.php?i=' + name)
    },
}