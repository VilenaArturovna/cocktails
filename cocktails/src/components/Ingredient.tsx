import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../store/store";
import {useEffect} from "react";
import {getIngredientTC} from "../reducers/drink-reducer";

type ParamsType = {
    name: string
}

export type IngredientType = {
    idIngredient: string
    strIngredient: string | null
    strDescription: string | null
    strType: string | null
    strAlcohol: string | null
    strABV: string | null
}

export const Ingredient = () => {
    const {name}: ParamsType = useParams()
    const ingredient = useSelector<RootStateType, IngredientType>(state => state.app.ingredients[0])
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getIngredientTC(name))
    }, [dispatch, name])

    return (
        <div>
            {ingredient &&
            <div>
                <h2>{ingredient.strIngredient}</h2>
                <img src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient}-Medium.png`}
                     alt=""/>
                <div>{ingredient.strDescription}</div>
            </div>
            }
        </div>
    )
}