export default class RecipeModel {
  constructor(recipe) {
    this._id = recipe.id;
    this._name = recipe.name;
    this._description = recipe.description;
    this._ingredients = recipe.ingredients;
    this._appliance = recipe.appliance;
    this._ustensils = recipe.ustensils;
    this._time = recipe.time;
    this._servings = recipe.servings;
  }

  get id() { return this._id; }

  get name() { return this._name; }

  get description() { return this._description; }

  get ingredients() { return this._ingredients; }

  get appliance() { return this._appliance; }

  get ustensils() { return this._ustensils; }

  get time() { return this._time; }

  get servings() { return this._servings; }
}