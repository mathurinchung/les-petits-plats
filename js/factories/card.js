import CardTemplate from "../templates/card.js";

export default class CardFactory {
  constructor(recipes) {
    this.recipes = recipes;

    const recipesTemplate = [];
    for (const recipe of this.recipes) {
      recipesTemplate[recipesTemplate.length] = new CardTemplate(recipe, this.#CardIngredientList(recipe));
    }

    return recipesTemplate;
  }

  #CardIngredientList(recipe) {
    const cardIngredientList = [];
    for (const item of recipe.ingredients) {
      const { ingredient, quantity, unit } = this.#CardIngredientItem(item);
      cardIngredientList[cardIngredientList.length] = `<li><span class="fw-bold">${ingredient}${quantity}${unit}</li>`;
    }

    return cardIngredientList.join("");
  }

  #CardIngredientItem(item) {
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