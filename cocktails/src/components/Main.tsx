import {Drink} from "./Drink";
import {useDispatch, useSelector} from "react-redux";
import {getRandomDrink} from "../reducers/drink-reducer";
import {RootStateType} from "../store/store";
import {DrinkType} from "../state/state";
import {useEffect} from "react";

export const Main = () => {
    const dispatch = useDispatch()
    const drink = useSelector<RootStateType, DrinkType>(state => state.app.drinks[0])

    useEffect(() => {
        dispatch(getRandomDrink())
    }, [dispatch])

    return (
        <div>
            <div>
                <h2>Random cocktail</h2>
                {drink &&
                <Drink id={drink.idDrink} />}
            </div>
        </div>
    )
}