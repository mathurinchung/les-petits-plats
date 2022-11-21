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

    for (const type of state.filterType) {
      if (element.parentElement.classList.contains(`dropdown-list-${type}`)) {
        document.querySelector(`.keyword-list-${type}`).innerHTML += this.#display(type, e.target.textContent);
      }
    }

    const setState = { ...state };
    setState.keywords[setState.keywords.length] = element.textContent;
    state.subject.dispatch("keywords", setState);
    state.subject.dispatch("cards", setState);
    const setFilters = new FiltersListFactory(setState.recipes);
    state.subject.dispatch("filters", state, setFilters);
  }

  handleRemoveKeywords(state) {
    const keywordElements = document.querySelectorAll(".keyword-item");

    for (const element of keywordElements) {
      element.querySelector(".icon-circle-xmark").onclick = () => {
        element.remove();

        if (document.querySelectorAll(".keyword-item").length === 0) document.querySelector("#keywords").classList.remove("show");
        state.keywords = [];
        for (const keyword of state.keywords) {
          if (keyword !== element.textContent.trim()) state.keywords[state.keywords.length] = keyword;
        }

        const setState = { ...state };
        setState.recipes = [ ...state.recipes ];
        state.subject.dispatch("keywords", setState);
        state.subject.dispatch("cards", setState);
        const setFilters = new FiltersListFactory(setState.recipes);
        state.subject.dispatch("filters", state, setFilters);
      };
    }
  }
}