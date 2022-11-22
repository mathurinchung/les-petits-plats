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
    const recipeName =  formatText(recipe.name);
    const recipeDescription =  formatText(recipe.description);
    const ingredientsList = recipe => {
      const arr = [];
      for (const item of recipe.ingredients) { arr[arr.length] = formatText(item.ingredient); }
      return arr;
    };
    const appliancesList = recipe => formatText(recipe.appliance);
    const ustensilsList = recipe => {
      const arr = [];
      for (const item of recipe.ustensils) { arr[arr.length] = formatText(item); }
      return arr;
    };

    return (
      recipeName.includes(formatKeyword) ||
      recipeDescription.includes(formatKeyword) ||
      ingredientsList(recipe).join(" ").includes(formatKeyword) ||
      appliancesList(recipe).includes(formatKeyword) ||
      ustensilsList(recipe).join(" ").includes(formatKeyword)
    );
  }

  #handleSearchFilter(keyword, filter) { return StringUtils.formatText(filter).includes(StringUtils.formatText(keyword)); }

  #handleSetData(setData, set) {
    const newSetData = [];
    for (const keyword of [ ...set ]) { if (setData.has(keyword)) newSetData[newSetData.length] = keyword; }

    return new Set(newSetData);
  }

  handle(type, inputValue = "", data = this.recipes) {
    const inputValueSplit = inputValue.split(" ");
    const keywords = this.#handleKeywords(inputValueSplit);

    let setData = new Set(data);

    if (type === "recipes" && keywords.length > 0) {
      for (const keyword of keywords) {
        const set = new Set();
        for (const item of data) { this.#handleSearchRecipe(keyword, item) && set.add(item); }
        setData = this.#handleSetData(setData, set);
      }
    }

    if (type === "filters" && inputValueSplit.length > 0) {
      for (const keyword of inputValueSplit) {
        const set = new Set();
        for (const item of data) { this.#handleSearchFilter(keyword, item) && set.add(item); }
        setData = this.#handleSetData(setData, set);
      }
    }

    return [ ...setData ];
  }
}