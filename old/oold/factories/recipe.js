import RecipeModel from '../models/recipe.js';
import FilterModel from "../models/filter.js";

export default class RecipeFactory {
  constructor(data) {
    const recipes = data.map(recipe => new RecipeModel(recipe));
    const { ingredients, appliances, ustensils } = new FilterModel(recipes);

    return { recipes, filters: { ingredients, appliances, ustensils } };
  }
}
