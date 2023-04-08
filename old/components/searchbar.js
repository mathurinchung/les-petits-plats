import { FiltersListFactory } from "../factories/recipe.js";
import SearchUtils from "../utils/search.js";

export default class SearchbarComponent {
  constructor() {
    this.searchForm = document.querySelector("#search");
    this.searchInputIcon = this.searchForm.querySelector(".icon");
  }

  #handleClearInput(state) {
    const searchUtils = new SearchUtils(state);
    this.searchForm.reset();
    this.searchInputIcon.className = "icon icon-magnifying-glass";
    return searchUtils.handle("recipes");
  }

  #handleOnInputSearchbar(e, state) {
    const searchUtils = new SearchUtils(state);
    const searchbarValue = e.target.value;

    if (searchbarValue.length >= 3) { return searchUtils.handle("recipes", searchbarValue); }

    if (searchbarValue.length >= 1) {
      this.searchInputIcon.className = "icon icon-circle-xmark";
      return searchUtils.handle("recipes");
    }

    if (searchbarValue.length === 0) {
      this.searchInputIcon.className = "icon icon-magnifying-glass";
      return searchUtils.handle("recipes");
    }
  }

  handle(state) {
    const setState = { ...state };
    const searchbarElement = document.querySelector("#searchbar");

    this.searchForm.reset();
    this.searchForm.onsubmit = e => {
      e.preventDefault();
      searchbarElement.blur();
    };

    searchbarElement.oninput = e => {
      setState.recipes = this.#handleOnInputSearchbar(e, state);
      state.subject.dispatch("cards", setState);
      const setFilters = new FiltersListFactory(setState.recipes);
      state.subject.dispatch("filters", state, setFilters);
      if (setState.recipes.length === 0) document.querySelector("#recipes").innerHTML = "<p>Aucune recette ne correspond à votre critère... vous pouvez chercher « tarte aux pommes », « poisson », etc.</p>";

      if (this.searchInputIcon.classList.contains("icon-circle-xmark")) {
        this.searchInputIcon.onclick = () => {
          setState.recipes = this.#handleClearInput(state);
          state.subject.dispatch("cards", setState);
          const setFilters = new FiltersListFactory(setState.recipes);
          state.subject.dispatch("filters", state, setFilters);
        };
      }
    };
  }
}