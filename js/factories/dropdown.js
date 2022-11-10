import RecipeModel from "../models/recipe.js";
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

  #DropdownList() {
    let dropdownItem = "";

    for (let item of this.list) {
      dropdownItem += `<li class="dropdown-item">${item}</li>`;
    }

    return dropdownItem;
  }

  #DropdownIngredientsList() {
    const arr = new Set();

    for (let item of this._data) {
      const recipe = new RecipeModel(item);
      for (let item of recipe.ingredients) {
        arr.add(item.ingredient);
      }
    }

    return [ ...arr ];
  }

  #DropdownAppliancesList() {
    const arr = new Set();

    for (let item of this._data) {
      const recipe = new RecipeModel(item);
      arr.add(recipe.appliance);
    }

    return [ ...arr ];
  }

  #DropdownUstensilsList() {
    const arr = new Set();

    for (let item of this._data) {
      const recipe = new RecipeModel(item);
      for (let item of recipe.ustensils) {
        arr.add(item);
      }
    }

    return [ ...arr ];
  }
}