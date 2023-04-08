import KeywordTemplate from "../../src/templates/keyword.js";
import { FiltersListFactory } from "../../src/factories/recipe.js";
import SearchUtils from "../utils/search.js";

export default class KeywordsComponent {
  #display(type, keyword) {
    const keywordTemplate = new KeywordTemplate();

    return keywordTemplate.KeywordDOM(type, keyword);
  }

  handleAddKeyword(e, state, element) {
    const searchbarElement = document.querySelector("#searchbar");
    document.querySelector("#keywords").classList.add("show");

    for (const type of state.filterType) {
      if (element.parentElement.classList.contains(`dropdown-list-${type}`)) {
        document.querySelector(`.keyword-list-${type}`).innerHTML += this.#display(type, e.target.textContent);
      }
    }

    const setState = { ...state };
    setState.keywords[setState.keywords.length] = element.textContent;
    setState.recipes = new SearchUtils(setState).handle("recipes", searchbarElement.value);
    state.subject.dispatch("cards", setState);
    const setFilters = new FiltersListFactory(setState.recipes);
    state.subject.dispatch("filters", state, setFilters);
  }

  handleRemoveKeywords(state) {
    const searchbarElement = document.querySelector("#searchbar");
    const keywordElements = document.querySelectorAll(".keyword-item");

    for (const element of keywordElements) {
      element.querySelector(".icon-circle-xmark").onclick = () => {
        element.remove();

        if (document.querySelectorAll(".keyword-item").length === 0) document.querySelector("#keywords").classList.remove("show");
        const arr = [];
        for (const keyword of state.keywords) {
          if (keyword !== element.textContent.trim()) arr[arr.length] = keyword;
        }

        state.keywords = [ ...arr ];
        const setState = { ...state };
        setState.recipes = new SearchUtils(setState).handle("recipes", searchbarElement.value);
        state.subject.dispatch("cards", setState);
        const setFilters = new FiltersListFactory(setState.recipes);
        state.subject.dispatch("filters", state, setFilters);
      };
    }
  }
}