import RecipeServices from '../services/recipe.js';
import RecipeFactory from '../factories/recipe.js';
import CardView from '../views/card.js';
import FilterView from '../views/filter.js';
import KeywordView from '../views/keyword.js';
import Subject from '../subjects/subject.js';
import SearchbarObserver from '../observers/searchbar.js';
import FiltersObserver from '../observers/filters.js';
import KeywordObserver from '../observers/keyword.js';
import { filtersList } from '../utils/filters.js';
import { filterType } from '../utils/filtertype.js';
import { searchRecipes } from '../utils/search.js';

class App {
  #renderRecipeCards(recipes) {
    const recipesListElement = document.querySelector('#recipes');
    recipesListElement.innerHTML = recipes.map(item => {
      const cardViews = new CardView(item);
      return cardViews.displayRecipeCard();
    }).join('');
  }

  #renderFilters(filters) {
    const filterTypes = [ 'ingredients', 'appliances', 'ustensils' ];
    const filtersContainerElement = document.querySelector('#filters');
    filtersContainerElement.innerHTML = filterTypes.map(type => {
      const filterView = new FilterView(type, filters);
      return filterView.displayFilter();
    }).join('');
  }

  #renderKeyword(type, keyword) {
    const keywordView = new KeywordView(type, keyword);
    return keywordView.displayKeyword();
  }

  #updateRender(recipes, recipeCards, filterItems) {
    return (terms) => {
      const { setRecipes, setFilters } = searchRecipes(recipes, terms);

      recipes.forEach((recipe, index) => {
        recipeCards[index].classList.toggle('none', !setRecipes.includes(recipe))
      });

      filterItems.forEach((item) => {
        const type = filterType(item);
        const filtersOfType = setFilters[type]?.map(filter => filter.split(" (", 1)).join('') || [];
        item.classList.toggle('none', !filtersOfType.includes(item.textContent));
      });
    };
  }

  #getKeywords(filterItems) {
    return () => {
      return filterItems.filter(item => item.classList.contains('active'))
      .map(item => item.textContent)
      .join(' ');
    };
  }

  async init() {
    const recipeServices = new RecipeServices();
    const data = await recipeServices.getRecipes()
    const recipes = data.map(recipe => new RecipeFactory(recipe));
    const filters = filtersList(recipes);
    this.#renderRecipeCards(recipes);
    this.#renderFilters(filters);

    const recipeCards = [ ...document.querySelectorAll('.recipe-card') ];
    const filterItems = [ ...document.querySelectorAll('.filter-item') ];
    const updateRender = this.#updateRender(recipes, recipeCards, filterItems);
    const getKeywords = this.#getKeywords(filterItems);

    // ...
    const subject = new Subject();

    const searchbarObserver = new SearchbarObserver(updateRender, getKeywords);
    const filtersObserver = new FiltersObserver();
    const keywordObserver = new KeywordObserver(updateRender, this.#renderKeyword)
    
    const observers = [ searchbarObserver, filtersObserver, keywordObserver ];
    observers.map(observer => subject.attach(observer));
    subject.dispatch();
  }
}

const app = new App();
app.init();
