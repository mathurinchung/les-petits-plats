import StringUtils from "./string.js";

export default class SearchUtils {
  constructor(state) {
    this.recipes = state.recipes;
    this.tags = state.keywords;
  }

  #handleKeywords(inputValueSplit) {
    if (this.tags.length > 0) return (inputValueSplit.length > 0) ? [ ...this.tags, ...inputValueSplit ] : [ ...this.tags ];
    else return (inputValueSplit.length > 0) ? [ ...inputValueSplit ] : [];
  }

  #handleSearchRecipe(keyword, recipe) {
    const { formatText } = StringUtils;
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

  #handleSearchFilter(keyword, filter) { return StringUtils.formatText(filter).includes(StringUtils.formatText(keyword)); }

  #handleSetData(set, setData) {
    return new Set([ ...set ].filter(keyword => setData.has(keyword)));
  }

  handle(type, inputValue = "", data = this.recipes) {
    const inputValueSplit = inputValue.split(" ");
    const keywords = this.#handleKeywords(inputValueSplit);

    let setData = new Set(data);
    (type === "recipes") && (keywords.length > 0) && keywords.map(keyword => {
      const set = new Set();
      data.map(item => this.#handleSearchRecipe(keyword, item) && set.add(item));
      setData = this.#handleSetData(set, setData);
    });

    (type === "filters") && (inputValueSplit.length > 0) && inputValueSplit.map(keyword => {
      const set = new Set();
      data.map(item => this.#handleSearchFilter(keyword, item) && set.add(item));
      setData = this.#handleSetData(set, setData);
    });

    return [ ...setData ];
  }
}