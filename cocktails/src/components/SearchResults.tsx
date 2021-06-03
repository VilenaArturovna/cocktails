import {useSelector} from "react-redux";
import {RootStateType} from "../store/store";
import {DrinkType} from "../state/state";
import {NavLink} from "react-router-dom";

export const SearchResults = () => {
    const drinks = useSelector<RootStateType, Array<DrinkType>>(state => state.app.drinks)

    return (
        <div>
            <h2>Results of search</h2>
            {drinks.map((d, i) => {
                return (
                    <div key={i}>{d.strDrink}<NavLink to={`/drink/${d.idDrink}`}><img src={`${d.strDrinkThumb}/preview`} alt=""/></NavLink></div>
                )
            })}

        </div>
    )
}