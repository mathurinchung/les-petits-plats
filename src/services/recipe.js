import Api from '../api/index.js';

export default class RecipeServices {
  constructor() {
    this.api = new Api();
  }

  getRecipes() {
    return this.api.get();
  }
}