import { setString } from './string.js'

const hasItem = (array, string) => {
  if (string && !array.has(string.slice(0, -1).trim())) array.add(string.trim());
}

const getUniqueRecipeItems = (recipes, getItem) => {
  const array = new Set();

  recipes.forEach(recipe => {
    const items = getItem(recipe);
    items.forEach(item => {
      const string = setString(item);
      hasItem(array, string);
    });
  });

  return [ ...array ];
};

export const filtersList = (recipes) => ({
  ingredients: getUniqueRecipeItems(recipes, recipe => recipe.ingredients.map(item => item.ingredient)),
  appliances: getUniqueRecipeItems(recipes, recipe => [recipe.appliance]),
  ustensils: getUniqueRecipeItems(recipes, recipe => recipe.ustensils)
});
