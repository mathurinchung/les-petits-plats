import { UnitMapping } from "../utils/unit.js";

export default class CardView {
  constructor(recipe) {
    this.recipe = recipe;
  }

  #CardIngredientList() {
    return this.recipe.ingredients.map(item => {
      const { ingredient, quantity, unit } = this.#CardIngredientItem(item);

      return `<li><span class="ingredient">${ingredient}${quantity}${unit}</li>`;
    }).join('');
  }

  #CardIngredientItem(item) {
    const ingredient = item.ingredient;
    const quantity = (item.quantity !== undefined) ? `:</span> ${item.quantity}` : '</span>';
    let unit = UnitMapping[ item.unit ] || '';

    return { ingredient, quantity, unit };
  }

  displayRecipeCard() {
    return (`
      <li class="recipe-card" data-name="${ this.recipe.name }">
        <figure>
          <div class="card-image"></div>
          <figcaption>
            <span class="card-name">${ this.recipe.name }</span>
            <span class="card-time"><i class="icon-clock"></i>${ this.recipe.time } min</span>
            <ul class="card-ingredients">${ this.#CardIngredientList() }</ul>
            <p class="card-description">${ this.recipe.description }</p>
          </figcaption>
        </figure>
      </li>
    `);
  }
}