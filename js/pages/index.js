import RecipeService from "../services/recipe.js";
import RecipeFactory from "../factories/recipe.js";
import ComponentsTemplate from "../templates/components.js";

class App {
  displayCard(recipes) {
    const recipesContainer = document.querySelector("#recipes");
    let recipeCardDOM = "";

    for (let recipe of recipes) {
      const recipeTemplate = new RecipeFactory(recipe, "card");
      recipeCardDOM += recipeTemplate.RecipeCardDOM();
    }

    recipesContainer.innerHTML = recipeCardDOM;
  }

  displayDropdown() {
    const dropdownContainer = document.querySelector("#dropdown");
    const componentsTemplate = new ComponentsTemplate();

    dropdownContainer.innerHTML  = componentsTemplate.DropdownDOM("ingredients", "Ingredients");
    dropdownContainer.innerHTML += componentsTemplate.DropdownDOM("appliances", "Appareils");
    dropdownContainer.innerHTML += componentsTemplate.DropdownDOM("ustensils", "Ustensiles");
  }

  handleComponents(recipes) {
    for (let recipe of recipes) {
      const componentsUtils = new RecipeFactory(recipe, "components");
      componentsUtils.handler();
    }
  }

  init() {
    const recipes = RecipeService.getAllRecipe();

    this.displayCard(recipes);
    this.displayDropdown();
    this.handleComponents(recipes);
  }
}

const app = new App();
app.init();