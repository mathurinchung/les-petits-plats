import CardFactory from "../factories/card.js";

export default class CardComponent {
  #displayCard(recipes) {
    const recipesContainer = document.querySelector("#recipes");

    const cardFactory = new CardFactory(recipes);
    return recipesContainer.innerHTML = cardFactory.map(recipe => recipe.CardDOM()).join("");
  }

  update(state) { this.#displayCard(state.recipes.all); }
}