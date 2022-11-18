import CardFactory from "../factories/card.js";

export default class CardComponent {
  #displayCard(recipes) {
    const recipesContainer = document.querySelector("#recipes");

    const cardFactory = new CardFactory(recipes);
    let recipesCardDOM = [];

    for (const recipe of cardFactory) {
      recipesCardDOM += recipe.CardDOM();
    }

    recipesContainer.innerHTML = recipesCardDOM;
  }

  update(state) { this.#displayCard(state.recipes.all); }
}