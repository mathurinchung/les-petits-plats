import SearchUtils from "../utils/search.js";

export default class SearchbarComponent {
  constructor() {
    this.searchForm = document.querySelector("#search");
    this.searchInputIcon = this.searchForm.querySelector(".icon");
  }

  #handleClearInput(setState) {
    this.searchForm.reset();
    this.searchInputIcon.className = "icon icon-magnifying-glass";
    return setState.recipes.all;
  }

  #handleOnInputSearchbar(e, setState) {
    const searchUtils = new SearchUtils(setState);
    const searchbarValue = e.target.value;

    if (searchbarValue.length >= 3) { return searchUtils.handleSearch("recipes", searchbarValue); }

    if (searchbarValue.length >= 1) {
      this.searchInputIcon.className = "icon icon-circle-xmark";
      return setState.recipes.all;
    }

    if (searchbarValue.length === 0) {
      this.searchInputIcon.className = "icon icon-magnifying-glass";
      return setState.recipes.all;
    }
  }

  handleSearchbar(state) {
    const setState = { ...state };
    const searchbarElement = document.querySelector("#searchbar");

    this.searchForm.reset();
    this.searchForm.onsubmit = e => {
      e.preventDefault();
      searchbarElement.blur();
    };

    searchbarElement.oninput = e => {
      state.recipes = { ...state.recipes, all: this.#handleOnInputSearchbar(e, setState) };
      state.subject.dispatch("set", state);
      state.subject.dispatch("update", state);

      if (this.searchInputIcon.classList.contains("icon-circle-xmark")) {
        this.searchInputIcon.onclick = () => {
          state.recipes = { ...state.recipes, all: this.#handleClearInput(setState) };
          state.subject.dispatch("set", state);
          state.subject.dispatch("update", state);
        };
      }
    };
  }
}