import RecipeModel from '../models/recipe.js';
import { filtersList } from '../utils/filters.js';

export default class RecipeFactory {
  constructor(data) {
    this.recipes = data.map(recipe => new RecipeModel(recipe));
    this.filters = filtersList(this.recipes);

    return [ this.recipes, this.filters ];
  }
}
