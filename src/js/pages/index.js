import RecipeService from "../services/recipe.js";
import RecipeFactory from "../factories/recipe.js";

class App {
  displayData(recipes) {
    const recipesContainer = document.querySelector("#recipes");
    recipesContainer.innerHTML = recipes.map(recipe => {
      const recipeTemplate = new RecipeFactory(recipe);
      return recipeTemplate.RecipeCardDOM();
    }).join("");
  }

  init() {
    const recipes = RecipeService.getAllRecipe();

    this.displayData(recipes);
  }
}

const app = new App();
app.init();