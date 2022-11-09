import RecipeModel from "../models/recipe.js";
import IngredientProperty from "../models/ingredient.js";
import RecipeTemplate from "../templates/recipe.js";

export default class RecipeFactory {
  constructor(data) {
    this._data = new RecipeModel(data);

    const ingredientItem = this._data.ingredients.map(item => {
      const { ingredient, quantity, unit } = IngredientProperty.ingredientItem(item);

      return `<li><span class="fw-bold">${ingredient}${quantity}${unit}</li>`;
    }).join("");

    return new RecipeTemplate(this._data, ingredientItem);
  }
}