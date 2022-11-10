import RecipeModel from "../models/recipe.js";
import DropdownTemplate from "../templates/dropdown.js";

export default class DropdownFactory {
  constructor(data, type) {
    this._data = data;
    this.type = type;

    if (this.type === "ingredients") {
      this.textContent = "Ingredients";
      this.list = this.#ingredientList();
    } else if (this.type === "appliances") {
      this.textContent = "Appareils";
      this.list = this.#appliancesList();
    } else if (this.type === "ustensils") {
      this.textContent = "Ustensiles";
      this.list = this.#ustensilsList();
    }

    return new DropdownTemplate(this.type, this.textContent, this.#dropdownList());
  }

  #dropdownList() { return this.list.map(item => `<li class="dropdown-item">${item}</li>`).join(""); }

  #ingredientList() {
    const arr = new Set();

    this._data.map(item => {
      const recipe = new RecipeModel(item);
      recipe.ingredients.map(item => arr.add(item.ingredient));
    });

    return [ ...arr ];
  }

  #appliancesList() {
    const arr = new Set();

    this._data.map(item => {
      const recipe = new RecipeModel(item);
      arr.add(recipe.appliance);
    });

    return [ ...arr ];
  }

  #ustensilsList() {
    const arr = new Set();

    this._data.map(item => {
      const recipe = new RecipeModel(item);
      recipe.ustensils.map(item => arr.add(item));
    });

    return [ ...arr ];
  }
}