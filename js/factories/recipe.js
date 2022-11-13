import RecipeModel from "../models/recipe.js";

export default class RecipeFactory {
  constructor(data) {
    this._data = data;
  }

  #setString(item) { return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase(); }

  NameList() {}

  DescriptionList() {}

  IngredientsList() {
    const arr = new Set();

    for (let item of this._data) {
      const recipe = new RecipeModel(item);
      for (let item of recipe.ingredients) {
        const string = this.#setString(item.ingredient);
        arr.add(string.trim());
      }
    }

    return [ ...arr ];
  }

  AppliancesList() {
    const arr = new Set();

    for (let item of this._data) {
      const recipe = new RecipeModel(item);
      const string = this.#setString(recipe.appliance);
      arr.add(string.trim());
    }

    return [ ...arr ];
  }

  UstensilsList() {
    const arr = new Set();

    for (let item of this._data) {
      const recipe = new RecipeModel(item);
      for (let item of recipe.ustensils) {
        const string = this.#setString(item);
        arr.add(string.trim());
      }
    }

    return [ ...arr ];
  }
}