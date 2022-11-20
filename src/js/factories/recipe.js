import RecipeModel from "../models/recipe.js";
import StringUtils from "../utils/string.js";

export default class RecipeFactory {
  constructor(data) {
    return data.map(recipe => new RecipeModel(recipe));
  }
}

export class FiltersListFactory {
  constructor(recipes) {
    this.recipes = recipes;
    this.tools = new StringUtils();

    return { 
      ingredients: this.#ingredientsList(),
      appliances: this.#appliancesList(),
      ustensils: this.#ustensilsList()
    };
  }

  #hasItem(arr, string) { if (!arr.has(string.slice(0, -1))) return arr.add(string.trim()); }

  #ingredientsList() {
    const arr = new Set();

    this.recipes.map(recipe => {
      recipe.ingredients.map(item => {
        const string = this.tools.setString(item.ingredient);
        this.#hasItem(arr, string);
      });
    });

    return [ ...arr ];
  }

  #appliancesList() {
    const arr = new Set();

    this.recipes.map(recipe => {
      const string = this.tools.setString(recipe.appliance);
      this.#hasItem(arr, string);
    });

    return [ ...arr ];
  }

  #ustensilsList() {
    const arr = new Set();

    this.recipes.map(recipe => {
      recipe.ustensils.map(item => {
        const string = this.tools.setString(item);
        this.#hasItem(arr, string);
      });
    });

    return [ ...arr ];
  }
}