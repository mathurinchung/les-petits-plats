import RecipeModel from '../models/recipe.js';

export default class RecipeFactory {
  constructor(recipe) {
    return new RecipeModel(recipe);
  }
}
