import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../store/store";
import {DrinkType} from "../../state/state";
import {NavLink} from "react-router-dom";
import style from "./SearchResults.module.scss";
import {getDrinkByID} from "../../reducers/drink-reducer";

export const SearchResults = () => {
    const drinks = useSelector<RootStateType, Array<DrinkType>>(state => state.app.drinks)
    const dispatch = useDispatch()

    const linkToDrink = (drinkId: string) => {
        dispatch(getDrinkByID(drinkId))
    }
    return (
        <div className={style.searchResults}>
            <h2>Results of search</h2>
            <div className={style.drinksBlock}>{drinks.map((d, i) => {
                return (
                    <div key={i} className={style.drinkBlock}>
                        {/*<NavLink to={`/cocktails/drink/${d.idDrink}`}>
                            <img src={`${d.strDrinkThumb}/preview`} alt=""/>
                        </NavLink>*/}
                        <NavLink to={`/cocktails/drink/${d.idDrink}`} key={i} onClick={() => linkToDrink(d.idDrink)}>
                            <div className={style.drink}>
                                <img src={`${d.strDrinkThumb}/preview`} alt={d.strDrink || ''}/>
                                <p>{d.strDrink}</p>
                            </div>
                        </NavLink>
                    </div>
                )
            })}</div>
        </div>
    )
}