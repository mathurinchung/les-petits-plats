import IngredientProperty from "./ingredient.js";

export default class RecipeModel {
  constructor(data) {
    this._id = data.id;
    this._name = data.name;
    this._description = data.description;
    this._ingredients = data.ingredients;
    this._appliance = data.appliance;
    this._ustensils = data.ustensils;
    this._time = data.time;
    this._servings = data.servings;
  }

  get id() { return this._id; }

  get name() { return this._name; }

  get description() { return this._description; }

  get ingredients() {
    let ingredientItem = "";
    
    for (let item of this._ingredients) {
      const { ingredient, quantity, unit } = IngredientProperty.ingredientItem(item);

      ingredientItem += `<li><span class="fw-bold">${ingredient}${quantity}${unit}</li>`;
    }

    return ingredientItem;
  }

  get appliance() { return this._appliance; }

  get ustensils() { return this._ustensils; }

  get time() { return this._time; }

  get servings() { return this._servings; }
}