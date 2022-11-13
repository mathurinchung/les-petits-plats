import RecipeFactory from "./recipe.js";
import DropdownTemplate from "../templates/dropdown.js";

export default class DropdownFactory {
  constructor(data, type) {
    this._data = new RecipeFactory(data);
    this.type = type;

    if (this.type === "ingredients") {
      this.textContent = "Ingredients";
      this.placeholder = "ingrédient";
      this.list = this._data.IngredientsList();
    } else if (this.type === "appliances") {
      this.textContent = "Appareils";
      this.placeholder = "appareil";
      this.list = this._data.AppliancesList();
    } else if (this.type === "ustensils") {
      this.textContent = "Ustensiles";
      this.placeholder = "ustensile";
      this.list = this._data.UstensilsList();
    }

    return new DropdownTemplate(this.type, this.textContent, this.placeholder, this.#DropdownList());
  }

  #DropdownList() { return this.list.map(item => `<li class="dropdown-item">${item.split(" (", 1)}</li>`).join(""); }
}