import RecipeModel from "../models/recipe.js";
import RecipeTemplate from "../templates/recipe.js";

export default class RecipeFactory {
  constructor(data) {
    this._data = new RecipeModel(data);

    return new RecipeTemplate(this._data);
  }

  #ingredientList() {}

  #ingredientItem(item) {
    const ingredient = item.ingredient;
    const quantity = (item.quantity !== undefined) ? `:</span> ${item.quantity}` : "</span>";
    let unit = "";

    switch (item.unit) {
    case "ml": unit = "ml";
      break;
    case"cl": unit = "cl";
      break;
    case "litres": unit = "l";
      break;
    case "grammes": unit = "g";
      break;
    case "kg": unit = "kg";
      break;
    case "cuillères à café": unit = "càc";
      break;
    case "cuillères à soupe": unit = " cuillères";
      break;
    case "sachets": unit = " sachets";
      break;
    case "tranches": unit = " tranches";
      break;
    case "tasses": unit = " tasses";
      break;
    case "tiges": unit = " tiges";
      break;
    case "gousses": unit = " gousses";
      break;
    case "verres": unit = " verres";
      break;
    case "boites": unit = " boîtes";
      break;
    case "barquettes": unit = " barquettes";
      break;
    case "pincées": unit = " pincées";
      break;
    case "feuilles": unit = " feuilles";
      break;
    default: unit = "";
    }
  
    return { ingredient, quantity, unit };
  }
}