import CardFactory from "../factories/card.js";

export default class CardComponent {
  display(state) {
    const recipesContainer = document.querySelector("#recipes");

    const cardFactory = new CardFactory(state.recipes);

    const recipesCardDOM = [];
    for (const recipe of cardFactory) { recipesCardDOM[recipesCardDOM.length] = recipe.CardDOM(); } // map method

    recipesContainer.innerHTML = recipesCardDOM.join("");
  }
}