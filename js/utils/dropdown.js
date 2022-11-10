export default class DropdownUtils {
  constructor(data) {
    this._ingredients = data.ingredients;
    this._appliance = data.appliance;
    this._ustensils = data.ustensils;
  }

  ingredientsList() { return this._ingredients; }

  applianceList() { return this._appliance; }

  ustensilsList() { return this._ustensils; }

  handler() {}
}