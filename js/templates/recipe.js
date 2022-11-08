export default class RecipeTemplate {
  constructor(data) {
    this._data = data;
  }

  RecipeCardDOM() {
    return `
      <article class="card" data-id="${this._data.id}">
        <figure class="card-img-top"></figure>
        <div class="card-body d-grid">
          <div class="card-heading d-flex justify-content-between align-items-start">
            <span class="card-name">${this._data.name}</span>
            <span class="card-time d-flex align-items-center fw-bold">
              <i class="icon icon-clock" aria-hidden="true"></i> ${this._data.time} min
            </span>
          </div>
          <ul class="card-ingredients">${this._data.ingredients}</ul>
          <p class="card-description">${this._data.description}</p>
        </div>
      </article>
    `;
  }
}