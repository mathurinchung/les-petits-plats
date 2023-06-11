import { setString } from './string.js'

const hasItem = (array, string) => {
  const trimmedString = string.trim();
  const singularString = trimmedString.endsWith('s') ? trimmedString.slice(0, -1) : trimmedString;
  const pluralString = !trimmedString.endsWith('s') ? trimmedString + 's' : trimmedString;

  if (array.includes(singularString) || array.includes(pluralString)) return;
  array.push(trimmedString);
}

const processRecipes = (array, items, transformer) => {
  items.forEach(item => hasItem(array, transformer(item)));
}

export const filtersList = (recipes) => {
  const list = { ingredients: [], appliances: [], ustensils: [] };

  recipes.forEach(recipe => {
    processRecipes(list.ingredients, recipe.ingredients, item => setString(item.ingredient));
    processRecipes(list.appliances, [recipe.appliance], item => setString(item));
    processRecipes(list.ustensils, recipe.ustensils, item => setString(item));
  });

  return list;
};
