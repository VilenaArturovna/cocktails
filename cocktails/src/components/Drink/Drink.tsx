import {DrinkType} from "../../state/state";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../store/store";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getDrinkByID} from "../../reducers/drink-reducer";
import {DrinkItem} from "./DrinkItem";

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
        if (props.id) {
            dispatch(getDrinkByID(props.id))
        } else if (id) {
            dispatch(getDrinkByID(id))
        }
    }, [dispatch, id, props.id])

    return (
        <div style={{'width': '100%'}}>
            {drink && <DrinkItem drink={drink}/>}
        </div>
    )
}