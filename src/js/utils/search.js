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
    const ingredientsList = recipe => recipe.ingredients.map(item => formatText(item.ingredient)).join(" ");

    return (recipeName.includes(formatKeyword) || recipeDescription.includes(formatKeyword) || ingredientsList(recipe).includes(formatKeyword));
  }

  #handleSearchFilter(keyword, filter) { return StringUtils.formatText(filter).includes(StringUtils.formatText(keyword)); }

  #handleSetData(set, setData) {
    return new Set([ ...set ].filter(keyword => setData.has(keyword)));
  }

  handle(type, inputValue = "", data = this.recipes) {
    const inputValueSplit = inputValue.split(" ");
    const keywords = this.#handleKeywords(inputValueSplit);

    let setData = new Set(data);
    (keywords.length > 0) && keywords.map(keyword => {
      const setArr = new Set();
      data.map(item => {
        (type === "recipes" && this.#handleSearchRecipe(keyword, item)) && setArr.add(item);
        (type === "filters" && this.#handleSearchFilter(keyword, item)) && setArr.add(item);
      });
      setData = this.#handleSetData(setArr, setData);
    });

    return [ ...setData ];
  }
}