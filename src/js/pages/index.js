import RecipeService from "../services/recipe.js";
import RecipeFactory from "../factories/recipe.js";
import RecipeSubject from "../observers/recipe.js";
import Components from "../components/index.js";

class App {
  constructor() {
    this.state = { data: [], recipes: {}, keywords: [], filterType: [ "ingredients", "appliances", "ustensils" ], subject: {} }; // init state
  }

  init() {
    this.state.data = RecipeService.getAllRecipes(); // init Data (State)
    this.state.recipes = new RecipeFactory(this.state.data); // init Recipes (State)
    this.state.subject = new RecipeSubject(); // init Subject (State)

    const components = new Components();
    components.init(this.state); // init Components

    this.state.subject.dispatch("set", this.state);
    this.state.subject.dispatch("update", this.state);
    // console.log("State: ", this.state);
  }
}

const app = new App();
app.init();