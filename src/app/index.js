import RecipeServices from '../services/recipe.js';
import RecipeFactory from '../factories/recipe.js';
import CardView from '../views/card.js';
import FilterView from '../views/filter.js';
import KeywordView from '../views/keyword.js';
import Subject from '../subjects/subject.js';
import RenderSubject from '../subjects/render.js';
import SearchbarObserver from '../observers/searchbar.js';
import FiltersObserver from '../observers/filters.js';
import KeywordObserver from '../observers/keyword.js';

class App {
  constructor() {
    this.recipesListElement = document.querySelector('#recipes');
    this.filtersContainerElement = document.querySelector('#filters');
  }

  #renderRecipeCards(recipes) {
    this.recipesListElement.innerHTML = recipes.map(item => new CardView(item).displayRecipeCard()).join('');
    this.recipesListElement.innerHTML += '<p class="empty">Aucune recette ne correspond à votre critère... vous pouvez chercher « tarte aux pommes », « poisson », etc.</p>'
  }

  #renderFilters(filters) {
    const filterTypes = [ 'ingredients', 'appliances', 'ustensils' ];
    this.filtersContainerElement.innerHTML = filterTypes.map(type => new FilterView(type, filters).displayFilter()).join('');
  }

  #renderKeyword(type, keyword) {
    return new KeywordView(type, keyword).displayKeyword();
  }

  async init() {
    const recipeServices = new RecipeServices();
    const data = await recipeServices.getRecipes();
    const [ recipes, filters ] = new RecipeFactory(data);

    this.#renderRecipeCards(recipes);
    this.#renderFilters(filters);

    const subject = new Subject();
    const renderSubject = new RenderSubject(recipes);

    const searchbarObserver = new SearchbarObserver(renderSubject);
    const filtersObserver = new FiltersObserver();
    const keywordObserver = new KeywordObserver(renderSubject, this.#renderKeyword);
    
    const observers = [ searchbarObserver, filtersObserver, keywordObserver ];
    observers.map(observer => subject.attach(observer));
    subject.dispatch();
    observers.map(observer => subject.detach(observer));
  }
}

const app = new App();
app.init();
