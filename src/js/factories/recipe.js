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

    this._data.map(item => {
      const recipe = new RecipeModel(item);
      recipe.ingredients.map(item => {
        const string = this.#setString(item.ingredient);
        arr.add(string.trim());
      });
    });

    return [ ...arr ];
  }

  AppliancesList() {
    const arr = new Set();

    this._data.map(item => {
      const recipe = new RecipeModel(item);
      const string = this.#setString(recipe.appliance);
      arr.add(string.trim());
    });

    return [ ...arr ];
  }

  UstensilsList() {
    const arr = new Set();

    this._data.map(item => {
      const recipe = new RecipeModel(item);
      recipe.ustensils.map(item => {
        const string = this.#setString(item);
        arr.add(string.trim());
      });
    });

    return [ ...arr ];
  }
}