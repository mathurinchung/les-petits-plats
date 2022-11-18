import KeywordTemplate from "../templates/keyword.js";
import SearchUtils from "../utils/search.js";

export default class KeywordsComponent {
  #setKeywords(state) {
    const searchUtils = new SearchUtils(state);
    return searchUtils.handleSearch("recipes");
  }

  #displayKeyword(type, keyword) {
    const keywordTemplate = new KeywordTemplate();
    return keywordTemplate.KeywordDOM(type, keyword);
  }

  handleAddKeyword(e, state, element) {
    document.querySelector("#keywords").classList.add("show");

    for (const type of state.filterType) {
      if (element.parentElement.classList.contains(`dropdown-list-${type}`)) {
        document.querySelector(`.keyword-list-${type}`).innerHTML += this.#displayKeyword(type, e.target.textContent);
      }
    }

    state.keywords[state.keywords.length] = element.textContent; // change method
    state.subject.dispatch("set", state);
    state.subject.dispatch("update", state);
  }

  handleRemoveKeywords(state) {
    const keywordElements = [ ...document.querySelectorAll(".keyword-item") ];

    for (const element of keywordElements) {
      element.querySelector(".icon-circle-xmark").onclick = () => {
        element.remove();
        
        if (document.querySelectorAll(".keyword-item").length === 0) document.querySelector("#keywords").classList.remove("show");

        const filterKeywords = [];
        for (const keyword of state.keywords) {
          if (keyword !== element.textContent.trim()) filterKeywords[filterKeywords.length] = keyword;
        }

        state.keywords = [ ...filterKeywords ];
        state.recipes.all = [ ...state.data ];
        state.subject.dispatch("set", state);
        state.subject.dispatch("update", state);
      };
    }
  }

  set(state) { state.recipes = { ...state.recipes, all: this.#setKeywords(state) }; }
}