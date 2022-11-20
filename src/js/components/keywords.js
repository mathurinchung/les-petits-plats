import KeywordTemplate from "../templates/keyword.js";
import { FiltersListFactory } from "../factories/recipe.js";
import SearchUtils from "../utils/search.js";

export default class KeywordsComponent {
  set(state) {
    const searchbarElement = document.querySelector("#searchbar");
    const setRecipes = new SearchUtils(state).handle("recipes", searchbarElement.value);
    state.recipes = setRecipes;
  }

  #display(type, keyword) {
    const keywordTemplate = new KeywordTemplate();

    return keywordTemplate.KeywordDOM(type, keyword);
  }

  handleAddKeyword(e, state, element) {
    document.querySelector("#keywords").classList.add("show");

    state.filterType.map(type => {
      if (element.parentElement.classList.contains(`dropdown-list-${type}`)) {
        document.querySelector(`.keyword-list-${type}`).innerHTML += this.#display(type, e.target.textContent);
      }
    });

    const setState = { ...state };
    setState.keywords.push(element.textContent);
    state.subject.dispatch("set", setState);
    state.subject.dispatch("cards", setState);
    const setFilters = new FiltersListFactory(setState.recipes);
    state.subject.dispatch("filters", state, setFilters);
  }

  handleRemoveKeywords(state) {
    const keywordElements = document.querySelectorAll(".keyword-item");
    // console.log(state);

    keywordElements.forEach(element => {
      element.querySelector(".icon-circle-xmark").onclick = () => {
        element.remove();

        if (document.querySelectorAll(".keyword-item").length === 0) document.querySelector("#keywords").classList.remove("show");
        state.keywords = state.keywords.filter(keyword => keyword !== element.textContent.trim());
        const setState = { ...state };
        setState.recipes = [ ...state.recipes ];
        state.subject.dispatch("set", setState);
        state.subject.dispatch("cards", setState);
        const setFilters = new FiltersListFactory(setState.recipes);
        state.subject.dispatch("filters", state, setFilters);
      };
    });
  }
}