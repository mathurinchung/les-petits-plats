import RecipeModel from "../models/recipe.js";
import StringUtils from "../utils/string.js";

export default class RecipeFactory {
  constructor(data) {
    const recipes = [];
    for (const recipe of data) { recipes[recipes.length] = new RecipeModel(recipe); }
    return recipes;
  }
}

export class FiltersListFactory {
  constructor(recipes) {
    this.recipes = recipes;

    return { ingredients: this.#ingredientsList(), appliances: this.#appliancesList(), ustensils: this.#ustensilsList() };
  }

  #hasItem(arr, string) { if (!arr.has(string.slice(0, -1))) return arr.add(string.trim()); }

  #ingredientsList() {
    const arr = new Set();

    for (const recipe of this.recipes) {
      for (const item of recipe.ingredients) {
        const string = StringUtils.setString(item.ingredient);
        this.#hasItem(arr, string);
      }
    }

    return [ ...arr ];
  }

  #appliancesList() {
    const arr = new Set();

    for (const recipe of this.recipes) {
      const string = StringUtils.setString(recipe.appliance);
      this.#hasItem(arr, string);
    }

    return [ ...arr ];
  }

  #ustensilsList() {
    const arr = new Set();

    for (const recipe of this.recipes) {
      for (const item of recipe.ustensils) {
        const string = StringUtils.setString(item);
        this.#hasItem(arr, string);
      }
    }

    return [ ...arr ];
  }
}