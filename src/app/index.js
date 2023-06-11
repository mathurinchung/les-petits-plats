import RecipeServices from '../services/recipe.js';
import RecipeFactory from '../factories/recipe.js';
import CardView from '../views/card.js';
import FilterView from '../views/filter.js';
import KeywordView from '../views/keyword.js';
import Subject from '../subjects/subject.js';
import RecipesSubject from '../subjects/recipes.js';
import RecipesObserver from '../observers/recipes.js';
import FiltersObserver from '../observers/filters.js';

class App {
  #renderRecipeCards(recipes) {
    const recipesListElement = document.querySelector('#recipes');
    recipesListElement.innerHTML = recipes.map(item => new CardView(item).displayRecipeCard()).join('');
    recipesListElement.innerHTML += '<p class="empty">Aucune recette ne correspond à votre critère... vous pouvez chercher « tarte aux pommes », « poisson », etc.</p>'
  }

  #renderFilters(filters) {
    const filtersContainerElement = document.querySelector('#filters');
    const filterTypes = [ 'ingredients', 'appliances', 'ustensils' ];
    filtersContainerElement.innerHTML = filterTypes.map(type => new FilterView(type, filters).displayFilter()).join('');
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
    const recipesSubject = new RecipesSubject(recipes);

    const recipesObserver = new RecipesObserver(recipesSubject, this.#renderKeyword)
    const filtersObserver = new FiltersObserver();

    const observers = [ recipesObserver, filtersObserver ];
    observers.map(observer => subject.attach(observer));
    subject.dispatch();
    // observers.map(observer => subject.detach(observer));
  }
}

const app = new App();
app.init();
