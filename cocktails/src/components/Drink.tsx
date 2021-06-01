import {DrinkType} from "../state/state";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../store/store";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getDrinkByID} from "../reducers/drink-reducer";

type ParamsType = {
    id: string | undefined
}
type PropsType = {
    id?: string
}

export const Drink = (props: PropsType) => {
    const {id}: ParamsType = useParams()
    const drink = useSelector<RootStateType, DrinkType>(state => state.app.drinks[0])
    const dispatch = useDispatch()

    useEffect(() => {
        if (id) {
            dispatch(getDrinkByID(id))
        } else if (props.id) {
            dispatch(getDrinkByID(props.id))
        }
    }, [dispatch, id, props.id])

    return (
        <div>
            {drink &&
            <div>
                <h2>{drink.strDrink}</h2>
                <img style={{'width': '300px'}} src={drink.strDrinkThumb} alt=""/>
                <div>
                    Ingredients:
                    {drink.strIngredient1 && drink.strIngredient1}
                    {drink.strIngredient2 && ` + ${drink.strIngredient2}`}
                    {drink.strIngredient3 && ` + ${drink.strIngredient3}`}
                    {drink.strIngredient4 && ` + ${drink.strIngredient4}`}
                    {drink.strIngredient5 && ` + ${drink.strIngredient5}`}
                    {drink.strIngredient6 && ` + ${drink.strIngredient6}`}
                    {drink.strIngredient7 && ` + ${drink.strIngredient7}`}
                    {drink.strIngredient8 && ` + ${drink.strIngredient8}`}
                    {drink.strIngredient9 && ` + ${drink.strIngredient9}`}
                    {drink.strIngredient10 && ` + ${drink.strIngredient10}`}
                    {drink.strIngredient11 && ` + ${drink.strIngredient11}`}
                    {drink.strIngredient12 && ` + ${drink.strIngredient12}`}
                    {drink.strIngredient13 && ` + ${drink.strIngredient13}`}
                    {drink.strIngredient14 && ` + ${drink.strIngredient14}`}
                    {drink.strIngredient15 && ` + ${drink.strIngredient15}`}
                </div>
            </div>
            }
        </div>
    )
}