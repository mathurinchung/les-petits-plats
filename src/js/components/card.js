import CardFactory from "../factories/card.js";

export default class CardComponent {
  display(state) {
    const recipesContainer = document.querySelector("#recipes");

    const cardFactory = new CardFactory(state.recipes);
    return recipesContainer.innerHTML = cardFactory.map(recipe => recipe.CardDOM()).join("");
  }
}