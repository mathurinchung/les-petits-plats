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

    for (let data of this._ingredients) {
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
  
      ingredientItem += `<li><span class="fw-bold">${ingredient}${quantity}${unit}</li>`
    }

    return ingredientItem;
  }

  get appliance() { return this._appliance; }

  get ustensils() { return this._ustensils; }

  get time() { return this._time; }

  get servings() { return this._servings; }
}