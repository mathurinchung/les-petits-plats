import RecipeService from "../services/recipe.js";
import RecipeFactory, { FiltersListFactory } from "../factories/recipe.js";
import RecipeSubject from "../observers/recipe.js";
import Components from "../components/index.js";

class App {
  constructor() {
    this.state = { recipes: [], keywords: [], filterType: [ "ingredients", "appliances", "ustensils" ], subject: {} }; // init state
  }

  init() {
    const data = RecipeService.getAllRecipes(); // init Data (State)
    this.state.recipes = new RecipeFactory(data); // init Recipes (State)
    this.state.subject = new RecipeSubject(); // init Subject (State)

    const components = new Components();
    components.init(this.state); // init Components

    this.state.subject.dispatch("cards", this.state);
    const setFilters = new FiltersListFactory(this.state.recipes);
    this.state.subject.dispatch("filters", this.state, setFilters);
    this.state.subject.dispatch("handle", this.state);

    console.log("State: ", this.state);
  }
}

const app = new App();
app.init();