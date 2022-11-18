import StringUtils from "./string.js";

export default class SearchUtils {
  constructor(state) {
    this.allRecipes = state.recipes.all;
    this.tags = state.keywords;
    this.tools = new StringUtils();
  }

  #handleKeywords(inputValueSplit) {
    if (this.tags.length > 0) return (inputValueSplit.length > 0) ? [ ...this.tags, ...inputValueSplit ] : [ ...this.tags ];
    else return (inputValueSplit.length > 0) ? [ ...inputValueSplit ] : [];
  }

  #handleSearchRecipe(formatText, keyword, recipe) {
    const ingredientsList = recipe => recipe.ingredients.map(item => formatText(item.ingredient)).join(" ");
    const appliancesList = recipe => formatText(recipe.appliance);
    const ustensilsList = recipe => recipe.ustensils.map(item => formatText(item)).join(" ");

    return (
      formatText(recipe.name).includes(formatText(keyword)) ||
      formatText(recipe.description).includes(formatText(keyword)) ||
      ingredientsList(recipe).includes(formatText(keyword)) ||
      appliancesList(recipe).includes(formatText(keyword)) ||
      ustensilsList(recipe).includes(formatText(keyword))
    );
  }

  #handleSearchFilter(formatText, keyword, filter) {
    return formatText(filter).includes(formatText(keyword));
  }

  handleSearch(type, inputValue = "", data = this.allRecipes) {
    const { formatText } = this.tools;
    const inputValueSplit = inputValue.split(" ");
    const keywords = this.#handleKeywords(inputValueSplit);

    let setData = new Set(data);
    (type === "recipes") && (keywords.length > 0) && keywords.map(keyword => {
      const arr = new Set();
      data.map(item => this.#handleSearchRecipe(formatText, keyword, item) && arr.add(item));
      setData = new Set([ ...arr ].filter(keyword => setData.has(keyword)));
    });

    (type === "filters") && (inputValueSplit.length > 0) && inputValueSplit.map(keyword => {
      const arr = new Set();
      data.map(item => this.#handleSearchFilter(formatText, keyword, item) && arr.add(item));
      setData = new Set([ ...arr ].filter(keyword => setData.has(keyword)));
    });

    return [ ...setData ];
  }
}