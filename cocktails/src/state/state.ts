type FiltersType = {
    ingredients: Array<string>
    alcoholic: Array<string>
    glasses: Array<string>
    categories: Array<string>
}

export const filters: FiltersType = {
    ingredients: ["Light rum", "Applejack", "Gin", "Dark rum", "Sweet Vermouth", "Strawberry schnapps", "Scotch",
        "Apricot brandy", "Triple sec", "Southern Comfort", "Orange bitters", "Brandy", "Lemon vodka", "Blended whiskey",
        "Dry Vermouth", "Amaretto", "Tea", "Champagne", "Coffee liqueur", "Bourbon", "Tequila", "Vodka", "Añejo rum",
        "Bitters", "Sugar", "Kahlua", "demerara Sugar", "Dubonnet Rouge", "Watermelon", "Lime juice", "Irish whiskey",
        "Apple brandy", "Carbonated water", "Cherry brandy", "Creme de Cacao", "Grenadine", "Port", "Coffee brandy",
        "Red wine", "Rum", "Grapefruit juice", "Ricard", "Sherry", "Cognac", "Sloe gin", "Apple juice",
        "Pineapple juice", "Lemon juice", "Sugar syrup", "Milk", "Strawberries", "Chocolate syrup", "Yoghurt", "Mango",
        "Ginger", "Lime", "Cantaloupe", "Berries", "Grapes", "Kiwi", "Tomato juice", "Cocoa powder", "Chocolate",
        "Heavy cream", "Galliano", "Peach Vodka", "Ouzo", "Coffee", "Spiced rum", "Water", "Espresso", "Angelica root",
        "Orange", "Cranberries", "Johnnie Walker", "Apple cider", "Everclear", "Cranberry juice", "Egg yolk", "Egg",
        "Grape juice", "Peach nectar", "Lemon", "Firewater", "Lemonade", "Lager", "Whiskey", "Absolut Citron", "Pisco",
        "Irish cream", "Ale", "Chocolate liqueur", "Midori melon liqueur", "Sambuca", "Cider", "Sprite", "7-Up",
        "Blackberry brandy", "Peppermint schnapps", "Creme de Cassis"],
    alcoholic: ["Alcoholic", "Non alcoholic", "Optional alcohol"],
    glasses: ["Highball glass", "Cocktail glass", "Old-fashioned glass", "Whiskey Glass", "Collins glass",
        "Pousse cafe glass", "Champagne flute", "Whiskey sour glass", "Cordial glass", "Brandy snifter",
        "White wine glass", "Nick and Nora Glass", "Hurricane glass", "Coffee mug", "Shot glass", "Jar",
        "Irish coffee cup", "Punch bowl", "Pitcher", "Pint glass", "Copper Mug", "Wine Glass", "Beer mug",
        "Margarita/Coupette glass", "Beer pilsner", "Beer Glass", "Parfait glass", "Mason jar", "Margarita glass",
        "Martini Glass", "Balloon Glass", "Coupe Glass"],
    categories: ["Ordinary Drink", "Cocktail", "Milk / Float / Shake", "Other/Unknown", "Cocoa", "Shot", "Coffee / Tea",
        "Homemade Liqueur", "Punch / Party Drink", "Beer", "Soft Drink / Soda"]
}

export type DrinkType = {
    idDrink: string
    strDrink: string | null
    strDrinkAlternate: string | null
    strTags: string | null
    strVideo: string | null
    strCategory: string | null
    strIBA: string | null
    strAlcoholic: string | null
    strGlass: string | null
    strInstructions: string | null
    strInstructionsES: string | null
    strInstructionsDE: string | null
    strInstructionsFR: string | null
    strInstructionsIT: string | null
    strDrinkThumb: string
    strIngredient1: string | null
    strIngredient2: string | null
    strIngredient3: string | null
    strIngredient4: string | null
    strIngredient5: string | null
    strIngredient6: string | null
    strIngredient7: string | null
    strIngredient8: string | null
    strIngredient9: string | null
    strIngredient10: string | null
    strIngredient11: string | null
    strIngredient12: string | null
    strIngredient13: string | null
    strIngredient14: string | null
    strIngredient15: string | null
    strMeasure1: string | null
    strMeasure2: string | null
    strMeasure3: string | null
    strMeasure4: string | null
    strMeasure5: string | null
    strMeasure6: string | null
    strMeasure7: string | null
    strMeasure8: string | null
    strMeasure9: string | null
    strMeasure10: string | null
    strMeasure11: string | null
    strMeasure12: string | null
    strMeasure13: string | null
    strMeasure14: string | null
    strMeasure15: string | null
    strImageSource: string | null
    strImageAttribution: string | null
    strCreativeCommonsConfirmed: string | null
    dateModified: string | null
}
type IngredientType = {
    idIngredientidIngredient: string
    strIngredient: string | null
    strDescription: string | null
    strType: string | null
    strAlcohol: string | null
    strABV: string | null
}
type FilteredDrinksType = Array<{
    strDrink: string
    strDrinkThumb: string | null
    idDrink: string
}>