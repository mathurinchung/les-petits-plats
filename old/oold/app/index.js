import RecipeServices from '../services/recipe.js';
import RecipeFactory from '../factories/recipe.js';
import CardViews from '../views/card.js';
import FilterViews from '../views/filter.js';

class App {
  init() {
    const recipeServices = new RecipeServices();
    const data = recipeServices.getRecipes();
    const store = new RecipeFactory(data);

    console.log('store:', store);

    const recipesListElement = document.querySelector('#recipes');
    recipesListElement.innerHTML = store.recipes.map(item => {
      const cardViews = new CardViews(item);
      return cardViews.RecipeCardDOM();
    }).join('');

    const filtersTypes = [ 'ingredients', 'appliances', 'ustensils' ];
    const filtersElement = document.querySelector('#filters');
    filtersElement.innerHTML = filtersTypes.map(type => {
      const filterViews = new FilterViews(type, store.filters);
      return filterViews.FilterDOM();
    }).join('');



    // const subject = new Subject();

    // const searchbarObserver = new SearchbarObserver();
    // const filterObserver = new FilterObserver();

    // subject.attach(searchbarObserver);
    // subject.attach(filterObserver);

    // subject.dispatch();
  }
}

const app = new App();
app.init();
