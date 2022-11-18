import RecipeModel from "../models/recipe.js";

export default class RecipeFactory {
  constructor(data) {
    return { all: data.map(recipe => new RecipeModel(recipe)) };
  }
}