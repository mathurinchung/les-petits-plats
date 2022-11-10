import RecipeService from "../services/recipe.js";
import CardFactory from "../factories/card.js";
import DropdownFactory from "../factories/dropdown.js";

class App {
  displayCard(recipes) {
    const recipesContainer = document.querySelector("#recipes");

    recipesContainer.innerHTML = recipes.map(recipe => {
      const cardTemplate = new CardFactory(recipe);
      return cardTemplate.CardDOM();
    }).join("");
  }

  displayDropdown(recipes) {
    const dropdownContainer = document.querySelector("#dropdown");
    const dropdownType = [ "ingredients", "appliances", "ustensils" ];

    dropdownContainer.innerHTML = dropdownType.map(type => {
      const dropdownTemplate = new DropdownFactory(recipes, type);
      return dropdownTemplate.DropdownDOM();
    }).join("");
  }

  init() {
    const recipes = RecipeService.getAllRecipe();

    this.displayCard(recipes);
    this.displayDropdown(recipes);
  }
}

const app = new App();
app.init();