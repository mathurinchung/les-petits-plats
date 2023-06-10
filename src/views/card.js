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
    let unit = '';

    switch (item.unit) {
    case 'ml': unit = 'ml';
      break;
    case'cl': unit = 'cl';
      break;
    case 'litres': unit = 'l';
      break;
    case 'grammes': unit = 'g';
      break;
    case 'kg': unit = 'kg';
      break;
    case 'cuillères à café': unit = 'càc';
      break;
    case 'cuillères à soupe': unit = ' cuillères';
      break;
    case 'sachets': unit = ' sachets';
      break;
    case 'tranches': unit = ' tranches';
      break;
    case 'tasses': unit = ' tasses';
      break;
    case 'tiges': unit = ' tiges';
      break;
    case 'gousses': unit = ' gousses';
      break;
    case 'verres': unit = ' verres';
      break;
    case 'boites': unit = ' boîtes';
      break;
    case 'barquettes': unit = ' barquettes';
      break;
    case 'pincées': unit = ' pincées';
      break;
    case 'feuilles': unit = ' feuilles';
      break;
    default: unit = '';
    }
  
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