import RecipeModel from "../models/recipe.js";

export default class RecipeFactory {
  constructor(data) {
    let allRecipes = [];
    for (const recipe of data) {
      allRecipes[allRecipes.length] = new RecipeModel(recipe);
    }

    return { all: allRecipes }; // change method
  }
}