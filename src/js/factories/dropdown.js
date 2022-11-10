// import RecipeModel from "../models/recipe.js";
import DropdownTemplate from "../templates/dropdown.js";

export default class DropdownFactory {
  constructor(data, type) {
    this._data = data;
    this.type = type;

    if (this.type === "ingredients") {
      this.textContent = "Ingredients";
      this.list = this.#DropdownIngredientsList();
    } else if (this.type === "appliances") {
      this.textContent = "Appareils";
      this.list = this.#DropdownAppliancesList();
    } else if (this.type === "ustensils") {
      this.textContent = "Ustensiles";
      this.list = this.#DropdownUstensilsList();
    }

    return new DropdownTemplate(this.type, this.textContent, this.#DropdownList());
  }

  #DropdownList() {}

  #DropdownIngredientsList() {}

  #DropdownAppliancesList() {}

  #DropdownUstensilsList() {}
}