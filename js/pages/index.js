import RecipeService from "../services/recipe.js";
import CardFactory from "../factories/card.js";
import DropdownFactory from "../factories/dropdown.js";

class App {
  displayCard(recipes) {
    const recipesContainer = document.querySelector("#recipes");
    let recipeCardDOM = "";

    for (let recipe of recipes) {
      const cardTemplate = new CardFactory(recipe);
      recipeCardDOM += cardTemplate.CardDOM();
    }

    recipesContainer.innerHTML = recipeCardDOM;
  }

  displayDropdown(recipes) {
    const dropdownContainer = document.querySelector("#dropdown");
    const dropdownType = [ "ingredients", "appliances", "ustensils" ];
    let dropdownDOM = "";

    for (let type of dropdownType) {
      const dropdownTemplate = new DropdownFactory(recipes, type);
      dropdownDOM += dropdownTemplate.DropdownDOM();
    }

    dropdownContainer.innerHTML = dropdownDOM;
  }

  init() {
    const recipes = RecipeService.getAllRecipe();

    this.displayCard(recipes);
    this.displayDropdown(recipes);
  }
}

const app = new App();
app.init();