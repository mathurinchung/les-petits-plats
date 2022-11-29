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
    const formatKeyword = formatText(keyword);
    const recipeName = formatText(recipe.name);
    const recipeDescription = formatText(recipe.description);
    const ingredientsList = recipe => {
      for (const item of recipe.ingredients) {
        formatText(item.ingredient).join(" ");
      }
    };
    const appliancesList = recipe => formatText(recipe.appliance);
    const ustensilsList = recipe => {
      for (const item of recipe.ustensils) {
        formatText(item).join(" ");
      }
    };

    return (recipeName.includes(formatKeyword) || recipeDescription.includes(formatKeyword) || ingredientsList(recipe).includes(formatKeyword) || appliancesList(recipe).includes(formatKeyword) || ustensilsList(recipe).includes(formatKeyword));
  }

  #handleSearchFilter(keyword, filter) { return StringUtils.formatText(filter).includes(StringUtils.formatText(keyword)); }

  #handleSetData(set, setData) {
    return new Set([ ...set ].filter(keyword => setData.has(keyword)));
  }

  handle(type, inputValue = "", data = this.recipes) {
    const inputValueSplit = inputValue.split(" ");
    const keywords = this.#handleKeywords(inputValueSplit);

    let setData = new Set(data);
    if (type === "recipes" && keywords.length > 0) {
      for (const keyword of keywords) {
        const set = new Set();
        for (const item of data) {
          this.#handleSearchRecipe(keyword, item) && set.add(item);
        }

        setData = this.#handleSetData(set, setData);
      }
    }

    if (type === "filters" && inputValueSplit.length > 0) {
      for (const keyword of inputValueSplit) {
        const set = new Set();
        for (const item of data) {
          this.#handleSearchFilter(keyword, item) && set.add(item);
        }

        setData = this.#handleSetData(set, setData);
      }
    }

    return [ ...setData ];
  }
}