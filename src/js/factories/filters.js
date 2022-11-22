export default class FiltersFactory {
  constructor(type, recipes) {
    this.type = type;
    this.recipes = recipes;

    if (this.type === "ingredients") this.list = this.recipes.ingredients;
    else if (this.type === "appliances") this.list = this.recipes.appliances;
    else if (this.type === "ustensils") this.list = this.recipes.ustensils;
  }

  DropdownListDOM() {
    const dropdownListDOM = [];
    for (const item of this.list) { dropdownListDOM[dropdownListDOM.length] = `<li class="dropdown-item">${item.split(" (", 1)}</li>`; }

    return dropdownListDOM.join("");
  }
}