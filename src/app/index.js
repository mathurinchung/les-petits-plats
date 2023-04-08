import RecipeFactory from '../factories/recipe.js';
import RecipeServices from '../services/recipe.js';
import Subject from '../subjects/subject.js';
import CardObserver from '../observers/card.js';
import FilterObserver from '../observers/filter.js';
import SearchbarObserver from '../observers/searchbar.js';

class App {
  constructor() {
    this.store = {};
  }

  init() {
    const recipeService = new RecipeServices();
    const data = recipeService.getRecipes();

    this.store = new RecipeFactory(data);

    const subject = new Subject(this.store);

    const cardObserver = new CardObserver(subject);
    const filterObserver = new FilterObserver(subject);
    const searchbarObserver = new SearchbarObserver(subject);

    subject.attach('init', cardObserver);
    subject.attach('init', filterObserver);
    subject.attach('init', searchbarObserver);

    subject.dispatch('init');
  }
}

const app = new App();
app.init();
