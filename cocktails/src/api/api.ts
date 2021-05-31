import axios from "axios";
import {DrinkType} from "../state/state";

const instance = axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1'
})

export const API = {
    getDrinkByID(id: string) {
        return instance.get<{drinks: Array<DrinkType>}>('/lookup.php?i=' + id)
    }
}