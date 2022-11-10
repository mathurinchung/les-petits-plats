import RecipeService from "../services/recipe.js";
import RecipeFactory from "../factories/recipe.js";

class App {
  displayCard(recipes) {
    const recipesContainer = document.querySelector("#recipes");

    recipesContainer.innerHTML = recipes.map(recipe => {
      const recipeTemplate = new RecipeFactory(recipe);
      return recipeTemplate.RecipeCardDOM();
    }).join("");
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