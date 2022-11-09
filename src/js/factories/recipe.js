import RecipeModel from "../models/recipe.js";
// import IngredientProperty from "../models/ingredient.js";
import RecipeTemplate from "../templates/recipe.js";

export default class RecipeFactory {
  constructor(data) {
    this._data = new RecipeModel(data);

    return new RecipeTemplate(this._data);
  }
}