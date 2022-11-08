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

    const cardsDOM = [ ...document.querySelectorAll(".card") ];
    cardsDOM.map(card => {
      const { id, name, ingredients, appliance, ustensils } = card.dataset;
      const dataset = { id, name, ingredients: ingredients.split(","), appliance, ustensils: ustensils.split(",") }
      console.log(dataset);
    });
  }
}

const app = new App();
app.init();