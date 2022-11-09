import RecipeService from "../services/recipe.js";
import ComponentsTemplate from "../templates/components.js";
import ComponentsFactory from "../factories/components.js";

class Components {
  displayComponents() {
    const dropdownContainer = document.querySelector("#dropdown");
    const componentsTemplate = new ComponentsTemplate();

    dropdownContainer.innerHTML  = componentsTemplate.DropdownDOM("ingredients", "Ingredients");
    dropdownContainer.innerHTML += componentsTemplate.DropdownDOM("appliances", "Appareils");
    dropdownContainer.innerHTML += componentsTemplate.DropdownDOM("ustensils", "Ustensiles");
  }

  handleComponents(recipes) {
    const componentsUtils = new ComponentsFactory(recipes);

    componentsUtils.handler();
  }

  init() {
    const recipes = RecipeService.getAllRecipe();

    this.displayComponents();
    this.handleComponents(recipes);
  }
}

const components = new Components();
components.init();