import RecipeModel from "../models/recipe.js";
import IngredientProperty from "../models/ingredient.js";
import RecipeTemplate from "../templates/recipe.js";

export default class RecipeFactory {
  constructor(data) {
    this._data = new RecipeModel(data);

    let ingredientItem = "";
    for (let item of this._data.ingredients) {
      const { ingredient, quantity, unit } = IngredientProperty.ingredientItem(item);

      ingredientItem += `<li><span class="fw-bold">${ingredient}${quantity}${unit}</li>`;
    }

    return new RecipeTemplate(this._data, ingredientItem);
  }
}