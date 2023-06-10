import { filtersList } from './filters.js';
import { formatText } from './string.js';
import { stopwords } from './stopwords.js';

const getFormattedItemsList = (recipe, getItems) => {
  const items = getItems(recipe);
  return items.map(item => formatText(item)).join(' ');
};

const searchInAttributes = (recipe, term, attributes) => {
  return attributes.some(attribute => attribute(recipe).includes(term));
};

export const searchRecipes = (recipes, searchTerms = '') => {
  const splitTerms = searchTerms.split(' ');
  const clearTerms = splitTerms.filter(word => !stopwords.includes(word));
  const formatTerms = clearTerms.map(term => formatText(term));

  const attributes = [
    recipe => formatText(recipe.name),
    recipe => formatText(recipe.description),
    recipe => getFormattedItemsList(recipe, recipe => recipe.ingredients.map(item => item.ingredient)),
    recipe => getFormattedItemsList(recipe, recipe => [recipe.appliance]),
    recipe => getFormattedItemsList(recipe, recipe => recipe.ustensils),
  ];

  let setRecipes = [ ...recipes ];

  setRecipes = setRecipes.filter(recipe =>
    formatTerms.every(formatTerm =>
      searchInAttributes(recipe, formatTerm, attributes)
    )
  );

  const setFilters = filtersList(setRecipes);

  return { setRecipes, setFilters };
};
