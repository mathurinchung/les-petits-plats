import RecipeService from "../services/recipe.js";
import RecipeFactory from "../factories/recipe.js";

class App {
  displayData(recipes) {
    const recipesContainer = document.querySelector("#recipes");
  }

  init() {
    const recipes = RecipeService.getAllRecipe();

    this.displayData(recipes);
  }
}

const app = new App();
app.init();