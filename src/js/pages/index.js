import RecipeService from "../services/recipe.js";
import RecipeFactory from "../factories/recipe.js";
import ComponentsTemplate from "../templates/components.js";

class App {
  displayCard(recipes) {
    const recipesContainer = document.querySelector("#recipes");

    recipesContainer.innerHTML = recipes.map(recipe => {
      const recipeTemplate = new RecipeFactory(recipe, "card");
      return recipeTemplate.RecipeCardDOM();
    }).join("");
  }

  displayDropdown() {
    const dropdownContainer = document.querySelector("#dropdown");
    const componentsTemplate = new ComponentsTemplate();

    dropdownContainer.innerHTML  = componentsTemplate.DropdownDOM("ingredients", "Ingredients");
    dropdownContainer.innerHTML += componentsTemplate.DropdownDOM("appliances", "Appareils");
    dropdownContainer.innerHTML += componentsTemplate.DropdownDOM("ustensils", "Ustensiles");
  }

  handleComponents(recipes) {
    const componentsUtils = new RecipeFactory(recipes, "components");

    componentsUtils.handler();
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