import RecipeService from "../services/recipe.js";
import RecipeFactory from "../factories/recipe.js";

class App {
  displayCard(recipes) {
    const recipesContainer = document.querySelector("#recipes");
    let recipeCardDOM = "";

    for (let recipe of recipes) {
      const recipeTemplate = new RecipeFactory(recipe);
      recipeCardDOM += recipeTemplate.RecipeCardDOM();
    }

    recipesContainer.innerHTML = recipeCardDOM;
  }

  init() {
    const recipes = RecipeService.getAllRecipe();

    this.displayCard(recipes);
  }
}

const app = new App();
app.init();