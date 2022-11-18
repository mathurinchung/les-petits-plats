import Api from "../api/index.js";

export default class RecipeService extends Api {
  static getAllRecipes() {
    const recipes = this.get();

    return recipes;
  }
}