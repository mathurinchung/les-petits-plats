import recipes from '../data/recipes.js';

export default class RecipeServices {
  constructor() {
    this.mock = recipes;
  }

  async getRecipes() {
    return await Promise.resolve(this.mock);
  }
}