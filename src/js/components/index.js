import RecipeService from "../services/recipe.js";
import ComponentsTemplate from "../templates/components.js";
// import ComponentsUtils from "../utils/index.js";

class Components {
  displayComponents() {
    const componentsTemplate = new ComponentsTemplate();

    componentsTemplate.DropdownDOM("ingredients", "Ingredients");
    componentsTemplate.DropdownDOM("appliances", "Appareils");
    componentsTemplate.DropdownDOM("ustensils", "Ustensiles");
  }

  handleComponents(recipes) {}

  init() {
    const recipes = RecipeService.getAllRecipe();

    this.displayComponents();
    this.handleComponents(recipes);
  }
}

const components = new Components();
components.init();