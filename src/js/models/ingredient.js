export default class IngredientProperty {
  static ingredientItem(item) {
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
  
    return { ingredient, quantity, unit };
  }
}