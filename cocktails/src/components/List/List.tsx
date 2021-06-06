import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {lists} from "../Main/Main";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../store/store";
import {getList} from "../../reducers/drink-reducer";

type ParamsType = {
    list: string
}

export const List = () => {
    const {list}: ParamsType = useParams()
    const filter = useSelector<RootStateType, Array<{ strCategory: string }>>(state => state.app.lists)
    const dispatch = useDispatch()
    debugger
    useEffect(() => {
        debugger
        for (let i = 0; i < lists.length; i++) {
            if (list === lists[i].name) {
                dispatch(getList(lists[i].letterForFilter))
                break
            }
        }
    }, [dispatch, list])


    return (
        <div>
            {filter && <div>
                {filter.map((f, i) => {

                    debugger
                    return <div key={i}>{f.strCategory}</div>
                })}
            </div>}
        </div>
    )
}