import {DrinkType} from "../state/state";

export const Drink = (props: DrinkType) => {
    return (
        <div>
            <h2>{props.strDrink}</h2>
            <img style={{'width': '300px'}} src={props.strDrinkThumb} alt=""/>
            <div>
                Ingredients:
                {props.strIngredient1 && props.strIngredient1}
                {props.strIngredient2 && ` + ${props.strIngredient2}`}
                {props.strIngredient3 && ` + ${props.strIngredient3}`}
                {props.strIngredient4 && ` + ${props.strIngredient4}`}
                {props.strIngredient5 && ` + ${props.strIngredient5}`}
                {props.strIngredient6 && ` + ${props.strIngredient6}`}
                {props.strIngredient7 && ` + ${props.strIngredient7}`}
                {props.strIngredient8 && ` + ${props.strIngredient8}`}
                {props.strIngredient9 && ` + ${props.strIngredient9}`}
                {props.strIngredient10 && ` + ${props.strIngredient10}`}
                {props.strIngredient11 && ` + ${props.strIngredient11}`}
                {props.strIngredient12 && ` + ${props.strIngredient12}`}
                {props.strIngredient13 && ` + ${props.strIngredient13}`}
                {props.strIngredient14 && ` + ${props.strIngredient14}`}
                {props.strIngredient15 && ` + ${props.strIngredient15}`}
            </div>
        </div>
    )
}