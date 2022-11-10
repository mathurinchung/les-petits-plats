import RecipeService from "../services/recipe.js";
// import RecipeFactory from "../factories/recipe.js";

class App {
  displayCard(recipes) {
    const recipesContainer = document.querySelector("#recipes");

    recipesContainer.innerHTML = "";// display recipes cards
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