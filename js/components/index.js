import RecipeService from "../services/recipe.js";
import ComponentsTemplate from "../templates/components.js";
import ComponentsUtils from "../utils/components.js";

export default class Components {
  displayDropdown() {
    const dropdownContainer = document.querySelector("#dropdown");
    const componentsTemplate = new ComponentsTemplate();

    dropdownContainer.innerHTML  = componentsTemplate.DropdownDOM("ingredients", "Ingredients");
    dropdownContainer.innerHTML += componentsTemplate.DropdownDOM("appliances", "Appareils");
    dropdownContainer.innerHTML += componentsTemplate.DropdownDOM("ustensils", "Ustensiles");
  }

  handleComponents(recipes) {
    const componentsUtils = new ComponentsUtils(recipes);

    componentsUtils.handler();
  }

  init() {
    const recipes = RecipeService.getAllRecipe();

    this.displayDropdown();
    this.handleComponents(recipes);
  }
}

const components = new Components();
components.init();