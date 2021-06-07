import {Drink} from "../Drink/Drink";
import {useDispatch, useSelector} from "react-redux";
import {getRandomDrink} from "../../reducers/drink-reducer";
import {RootStateType} from "../../store/store";
import {DrinkType} from "../../state/state";
import {useEffect} from "react";
import styles from "../../style/Container.module.scss";
import style from './Main.module.scss'
import {NavLink} from "react-router-dom";

type ListsType = {
    name: string
    letterForFilter: string
}

enum Lists {
    categories = 'c',
    glasses = 'g',
    ingredients = 'i',
    alcoholic = 'a'
}

export const lists: Array<ListsType> = [
    {name: 'Categories', letterForFilter: Lists.categories},
    {name: 'Glasses', letterForFilter: Lists.glasses},
    {name: 'Ingredients', letterForFilter: Lists.ingredients},
    {name: 'Alcoholic', letterForFilter: Lists.alcoholic}
]
export const Main = () => {
    const dispatch = useDispatch()
    const drink = useSelector<RootStateType, DrinkType>(state => state.app.drinks[0])

    useEffect(() => {
            dispatch(getRandomDrink())
        }, [dispatch]
    )

    return (
        <div className={style.main}>
            <div className={style.lists}>
                {lists.map((l, index) => {
                    return <NavLink key={index} to={`/cocktails/lists/${l.name}`}>{l.name}</NavLink>
                })}
            </div>

            <div className={`${styles.container} ${style.randomDrink}`}>
                <h2>Random cocktail</h2>
                {drink &&
                <Drink id={drink.idDrink}/>}
            </div>
        </div>
    )
}