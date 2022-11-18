import DropdownTemplate from "../templates/dropdown.js";

export default class DropdownFactory {
  constructor(type) {
    this.type = type;

    if (this.type === "ingredients") {
      this.textContent = "Ingredients";
      this.placeholder = "ingrédient";
    } else if (this.type === "appliances") {
      this.textContent = "Appareils";
      this.placeholder = "appareil";
    } else if (this.type === "ustensils") {
      this.textContent = "Ustensiles";
      this.placeholder = "ustensile";
    }

    return new DropdownTemplate(this.type, this.textContent, this.placeholder);
  }
}