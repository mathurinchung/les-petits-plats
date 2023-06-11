import Subject from './subject.js';
import { filterType } from '../utils/filtertype.js';
import { searchRecipes } from '../utils/search.js';

export default class RecipesSubject extends Subject {
  constructor(recipes) {
    super();
    this.recipes = recipes;
    this.recipeCards = [ ...document.querySelectorAll('.recipe-card') ];
    this.emptyElement = document.querySelector('#recipes .empty');
    this.filterItems = [ ...document.querySelectorAll('.filter-item') ];
  }

  getKeywords() {
    return this.filterItems.filter(item => item.classList.contains('active'))
      .map(item => item.textContent)
      .join(' ');
  }

  updateRender(terms) {
    const { setRecipes, setFilters } = searchRecipes(this.recipes, terms);

    this.recipes.forEach((recipe, index) => {
      this.recipeCards[index].classList.toggle('none', !setRecipes.includes(recipe));
    });

    this.emptyElement.classList.toggle('show', setRecipes.length === 0);


    this.filterItems.forEach((item) => {
      const type = filterType(item);
      const filtersOfType = setFilters[type]?.map(filter => filter.split(" (", 1)).join('') || [];
      item.classList.toggle('none', !filtersOfType.includes(item.textContent));
    });
  }

  dispatch(terms) {
    this.observers.forEach(observer => observer.update(terms));
  }
}