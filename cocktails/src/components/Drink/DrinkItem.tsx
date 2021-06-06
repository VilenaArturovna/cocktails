import {DrinkType} from "../../state/state";
import style from "./Drink.module.scss";
import {NavLink} from "react-router-dom";
import {useState} from "react";
import uk from "../../Assets/Icons/united-kingdom.png";
import spain from "../../Assets/Icons/spain.png";
import germany from "../../Assets/Icons/germany.png";
import france from "../../Assets/Icons/france.png";
import italy from "../../Assets/Icons/italy.png";

type PropsType = {
    drink: DrinkType
}
type IngredientForArrayType = {
    ingredient: string | null
    measure: string | null
}
type InstructionForArrayType = {
    instruction: string | null
    language: string
}

export const DrinkItem = ({drink}: PropsType) => {
    const [instruction, setInstruction] = useState(drink.strInstructions)
    const ingredients: Array<IngredientForArrayType> = [
        {ingredient: drink.strIngredient1, measure: drink.strMeasure1},
        {ingredient: drink.strIngredient2, measure: drink.strMeasure2},
        {ingredient: drink.strIngredient3, measure: drink.strMeasure3},
        {ingredient: drink.strIngredient4, measure: drink.strMeasure4},
        {ingredient: drink.strIngredient5, measure: drink.strMeasure5},
        {ingredient: drink.strIngredient6, measure: drink.strMeasure6},
        {ingredient: drink.strIngredient7, measure: drink.strMeasure7},
        {ingredient: drink.strIngredient8, measure: drink.strMeasure8},
        {ingredient: drink.strIngredient9, measure: drink.strMeasure9},
        {ingredient: drink.strIngredient10, measure: drink.strMeasure10},
        {ingredient: drink.strIngredient11, measure: drink.strMeasure11},
        {ingredient: drink.strIngredient12, measure: drink.strMeasure12},
        {ingredient: drink.strIngredient13, measure: drink.strMeasure13},
        {ingredient: drink.strIngredient14, measure: drink.strMeasure14},
        {ingredient: drink.strIngredient15, measure: drink.strMeasure15}
    ]
    const instructions: Array<InstructionForArrayType> = [
        {instruction: drink.strInstructions, language: uk},
        {instruction: drink.strInstructionsES, language: spain},
        {instruction: drink.strInstructionsDE, language: germany},
        {instruction: drink.strInstructionsFR, language: france},
        {instruction: drink.strInstructionsIT, language: italy}
    ]
    return (
        <div className={style.drink}>
            {drink &&
            <div>
                <div className={style.drinkAndIngredients}>
                    <h2>{drink.strDrink}</h2>
                    <div className={style.drinkBlock}>
                        <div>
                            <img style={{'width': '300px'}} src={drink.strDrinkThumb} alt=""/>
                        </div>
                        <div>
                            <h3>Ingredients</h3>
                            <div className={style.ingredients}>
                                {ingredients.map((i, index) => i.ingredient &&
                                    <NavLink key={index} to={`/cocktails/ingredient/${i.ingredient}`}>
                                        <figure className={style.ingredientItem}>
                                            <img alt={'ingredient'}
                                                 src={`https://www.thecocktaildb.com/images/ingredients/${i.ingredient}-Small.png`}/>
                                            <span>{i.measure} {i.ingredient}</span>
                                        </figure>
                                    </NavLink>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.moreAbout}>
                    <div className={style.instruction}>
                        <h3>Instruction</h3>
                        <div className={style.flags}>
                            {instructions.map((instr, i) => instr.instruction &&
                                <div key={i} onClick={() => setInstruction(instr.instruction)}>
                                    <img src={instr.language} alt="language" style={{'width': '32px'}}/>
                                </div>
                            )}
                        </div>
                        <p>{instruction}</p>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}