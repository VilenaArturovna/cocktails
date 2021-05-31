import {Drink} from "./Drink";
import {useDispatch, useSelector} from "react-redux";
import {getDrinkByID} from "../reducers/reducers";
import {RootStateType} from "../store/store";
import {DrinkType} from "../state/state";

export const Main = () => {
    const dispatch = useDispatch()
    const drink = useSelector<RootStateType, DrinkType>(state => state.app.drinks[0])

    const getDrink = () => {
        dispatch(getDrinkByID('11007'))
    }

    return (
        <div>
            <button onClick={getDrink}>Get drink</button>
            <Drink {...drink}/>
        </div>
    )
}