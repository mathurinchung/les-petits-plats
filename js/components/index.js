import RecipeService from "../services/recipe.js";
import ComponentsUtils from "../utils/components.js";

export default class Components {
  handleComponents(recipes) {
    const componentsUtils = new ComponentsUtils(recipes);

    componentsUtils.handler();
  }

  init() {
    const recipes = RecipeService.getAllRecipe();

    this.handleComponents(recipes);
  }
}

const components = new Components();
components.init();