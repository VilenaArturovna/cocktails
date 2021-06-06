import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../store/store";
import {useEffect} from "react";
import {getDrinkByID, getDrinksByIngredient, getIngredientTC} from "../../reducers/drink-reducer";
import style from './Ingredient.module.scss'
import {DrinkMiniType} from "../../state/state";
import {NavLink} from "react-router-dom";

type ParamsType = {
    name: string
}
export type IngredientType = {
    idIngredient: string
    strIngredient: string
    strDescription: string | null
    strType: string | null
    strAlcohol: string | null
    strABV: string | null
}

export const Ingredient = () => {
    const {name}: ParamsType = useParams()
    const ingredient = useSelector<RootStateType, IngredientType>(state => state.app.ingredients[state.app.ingredients.length - 1])
    const drinks = useSelector<RootStateType, Array<DrinkMiniType>>(state => state.app.drinksPreview)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getIngredientTC(name))
    }, [dispatch, name])
    useEffect(() => {
        dispatch(getDrinksByIngredient(name))
    }, [dispatch, name])

    const linkToDrink = (drinkId: string) => {
        dispatch(getDrinkByID(drinkId))
    }

    return (
        <div className={style.block}>
            {ingredient &&
            <div className={style.ingredient}>
                <h2>{ingredient.strIngredient}</h2>
                <div className={style.ingredientBlock}>
                    <div><img
                        src={`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient}-Medium.png`}
                        alt=""/></div>
                    <div className={style.description}>
                        <p>{ingredient.strDescription}</p>
                        {ingredient.strType && <div><span>Type:</span> {ingredient.strType}</div>}
                        {ingredient.strAlcohol && <div><span>Alcohol:</span> {ingredient.strAlcohol}</div>}
                        {ingredient.strABV && <div><span>ABV:</span> {ingredient.strABV}</div>}
                    </div>
                </div>
                <h3>Drinks uses {ingredient.strIngredient}</h3>
                <div className={style.drinksBlock}>
                    {drinks.map((d, i) => {
                    return (
                        <NavLink to={`/cocktails/drink/${d.idDrink}`} key={i} onClick={() => linkToDrink(d.idDrink)}>
                            <div className={style.drink}>
                                <img src={`${d.strDrinkThumb}/preview`} alt={d.strDrink}/>
                                <p>{d.strDrink}</p>
                            </div>
                        </NavLink>
                    )
                })}
                </div>
            </div>
            }
        </div>
    )
}