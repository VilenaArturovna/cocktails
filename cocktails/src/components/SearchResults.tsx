import {useSelector} from "react-redux";
import {RootStateType} from "../store/store";
import {DrinkType} from "../state/state";

export const SearchResults = () => {
    const drinks = useSelector<RootStateType, Array<DrinkType>>(state => state.app.drinks)

    return (
        <div>
            <h2>Results of search</h2>
            {drinks.map((d, i) => {
                return (
                    <div key={i}>{d.strDrink}<img src={`${d.strDrinkThumb}/preview`} alt=""/></div>
                )
            })}

        </div>
    )
}