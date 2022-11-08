export default class RecipeModel {
  constructor(data) {
    this._id = data.id;
    this._name = data.name;
    this._description = data.description;
    this._ingredients = data.ingredients;
    this._appliance = data.appliance;
    this._ustensils = data.ustensils;
    this._time = data.time;
    this._servings = data.servings;
  }

  get id() { return this._id; }

  get name() { return this._name; }

  get description() { return this._description; }

  get ingredients() {
    let ingredientItem = "";

    for (let item of this._ingredients) {
      const ingredient = item.ingredient;
      const quantity = (item.quantity !== undefined) ? `:</span> ${item.quantity}` : "</span>";
      let unit = "";
      if (item.unit !== undefined) {
        if (item.unit === "ml") { unit = "ml"; }
        if (item.unit === "cl") { unit = "cl"; }
        if (item.unit === "litres") { unit = "l"; }
        if (item.unit === "grammes") { unit = "g"; }
        if (item.unit === "kg") { unit = "kg"; }
        if (item.unit === "cuillères à café") { unit = "càc"; }
        if (item.unit === "cuillères à soupe") { unit = " cuillères"; }
        if (item.unit === "sachets") { unit = " sachets"; }
        if (item.unit === "tranches") { unit = " tranches"; }
        if (item.unit === "tasses") { unit = " tasses"; }
        if (item.unit === "tiges") { unit = " tiges"; }
        if (item.unit === "gousses") { unit = " gousses"; }
        if (item.unit === "verres") { unit = " verres"; }
        if (item.unit === "boites") { unit = " boîtes"; }
        if (item.unit === "barquettes") { unit = " barquettes"; }
        if (item.unit === "pincées") { unit = " pincées"; }
        if (item.unit === "feuilles") { unit = " feuilles"; }
      } else { unit = ""; }
  
      ingredientItem += `<li><span class="fw-bold">${ingredient}${quantity}${unit}</li>`;
    }

    return ingredientItem;
  }

  get appliance() { return this._appliance; }

  get ustensils() { return this._ustensils; }

  get time() { return this._time; }

  get servings() { return this._servings; }
}