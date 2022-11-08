import RecipeService from "../services/recipe.js";
import RecipeFactory from "../factories/recipe.js";

class App {
  displayData(recipes) {
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

    this.displayData(recipes);

    const cardsDOM = [ ...document.querySelectorAll(".card") ];

    for (let card of cardsDOM) {
      const { id, name, ingredients, appliance, ustensils } = card.dataset;
      console.log({ id, name, ingredients: ingredients.split(","), appliance, ustensils: ustensils.split(",") });
    }
  }
}

const app = new App();
app.init();