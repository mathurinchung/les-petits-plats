import StringUtils from "../utils/string.js";

export default class FiltersFactory {
  constructor(type, recipes) {
    this.type = type;
    this.recipes = recipes;

    if (this.type === "ingredients") {
      this.list = this.recipes.ingredients;
    } else if (this.type === "appliances") {
      this.list = this.recipes.appliances;
    } else if (this.type === "ustensils") {
      this.list = this.recipes.ustensils;
    }
  }

  DropdownListDOM() {
    return this.list.map(item => `<li class="dropdown-item">${item.split(" (", 1)}</li>`).join(""); // change method
  }
}

export class FiltersListFactory {
  constructor() {
    this.tools = new StringUtils();
  }

  filterList(recipes) {
    return { 
      ingredients: this.ingredientList(recipes),
      appliances: this.appliancesList(recipes),
      ustensils: this.ustensilsList(recipes)
    };
  }

  #hasItem(arr, string) { if (!arr.has(string.slice(0, -1))) return arr.add(string.trim()); } // change method

  ingredientList(recipes) {
    const arr = new Set(); // change method

    recipes.map(recipe => {
      recipe.ingredients.map(item => {
        const string = this.tools.setString(item.ingredient); // change method
        this.#hasItem(arr, string);
      });
    });

    return [ ...arr ];
  }

  appliancesList(recipes) {
    const arr = new Set();

    recipes.map(recipe => {
      const string = this.tools.setString(recipe.appliance); // change method
      this.#hasItem(arr, string);
    });

    return [ ...arr ];
  }

  ustensilsList(recipes) {
    const arr = new Set();

    recipes.map(recipe => {
      recipe.ustensils.map(item => {
        const string = this.tools.setString(item); // change method
        this.#hasItem(arr, string);
      });
    });

    return [ ...arr ];
  }
}