export default class RecipeTemplate {
  constructor(data) {
    this._data = data;
  }

  RecipeCardDOM() {
    const ingedientsList = this._data.ingredients.map(data => {
      const ingredient = data.ingredient;
      const quantity = (data.quantity !== undefined) ? `:</span> ${data.quantity}` : "</span>";
      let unit = "";
      if (data.unit !== undefined) {
        if (data.unit === "ml") { unit = "ml" }
        if (data.unit === "cl") { unit = "cl" }
        if (data.unit === "litres") { unit = "l" }
        if (data.unit === "grammes") { unit = "g" }
        if (data.unit === "kg") { unit = "kg" }
        if (data.unit === "cuillères à café") { unit = "càc" }
        if (data.unit === "cuillères à soupe") { unit = " cuillères" }
        if (data.unit === "sachets") { unit = " sachets" }
        if (data.unit === "tranches") { unit = " tranches" }
        if (data.unit === "tasses") { unit = " tasses" }
        if (data.unit === "tiges") { unit = " tiges" }
        if (data.unit === "gousses") { unit = " gousses" }
        if (data.unit === "verres") { unit = " verres" }
        if (data.unit === "boites") { unit = " boîtes" }
        if (data.unit === "barquettes") { unit = " barquettes" }
        if (data.unit === "pincées") { unit = " pincées" }
        if (data.unit === "feuilles") { unit = " feuilles" }
      } else { unit = "" }
  
      return `<li><span class="fw-bold">${ingredient}${quantity}${unit}</li>`
    }).join("");
  
    return `
      <article class="card" data-id="${this._data.id}" data-name="${this._data.name}" data-ingredients="${this._data.ingredients.map(data => data.ingredient)}" data-appliance="${this._data.appliance}" data-ustensils="${this._data.ustensils}">
        <figure class="card-img-top"></figure>
        <div class="card-body d-grid">
          <div class="card-heading d-flex justify-content-between align-items-start">
            <span class="card-name">${this._data.name}</span>
            <span class="card-time d-flex align-items-center fw-bold">
              <i class="icon icon-clock" aria-hidden="true"></i> ${this._data.time} min
            </span>
          </div>
          <ul class="card-ingredients">${ingedientsList}</ul>
          <p class="card-description">${this._data.description}</p>
        </div>
      </article>
    `;
  }
}