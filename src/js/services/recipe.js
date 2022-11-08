import Api from "../api/index.js";

export default class RecipeService extends Api {
  static getAllRecipe() {
    const recipes = this.get();

    return recipes;
  }
}