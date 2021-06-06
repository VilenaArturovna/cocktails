import {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {searchDrinksTC} from "../../reducers/drink-reducer";
import {NavLink} from "react-router-dom";

export const SearchDrink = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState<string>('')

    //добавить useEffect для удаления напитков из стэйта

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = () => {
        dispatch(searchDrinksTC(value))
        debugger
        setValue('')
    }

    return (
        <div>
            <form action="">
                <input type="text" value={value} onChange={changeHandler}/>
                <NavLink to={'/cocktails/SearchResults'} ><button onClick={clickHandler}>Search</button> </NavLink>
            </form>
        </div>
    )
}