export default class CardTemplate {
  constructor(recipe, ingredients) {
    this.recipe = recipe;
    this.ingredients = ingredients;
  }

  CardDOM() {
    return `
      <article class="card" data-id="${this.recipe.id}">
        <figure class="card-img-top"></figure>
        <div class="card-body d-grid">
          <div class="card-heading d-flex justify-content-between align-items-start">
            <span class="card-name">${this.recipe.name}</span>
            <span class="card-time d-flex align-items-center fw-bold">
              <i class="icon icon-clock" aria-hidden="true"></i> ${this.recipe.time} min
            </span>
          </div>
          <ul class="card-ingredients">${this.ingredients}</ul>
          <p class="card-description">${this.recipe.description}</p>
        </div>
      </article>
    `;
  }
}