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

    state.filterType.map(type => {
      if (element.parentElement.classList.contains(`dropdown-list-${type}`)) {
        document.querySelector(`.keyword-list-${type}`).innerHTML += this.#displayKeyword(type, e.target.textContent);
      }
    });

    state.keywords.push(element.textContent);
    state.subject.dispatch("set", state);
    state.subject.dispatch("update", state);
  }

  handleRemoveKeywords(state) {
    const keywordElements = document.querySelectorAll(".keyword-item");

    keywordElements.forEach(element => {
      element.querySelector(".icon-circle-xmark").onclick = () => {
        element.remove();
        
        if (document.querySelectorAll(".keyword-item").length === 0) document.querySelector("#keywords").classList.remove("show");
        state.keywords = state.keywords.filter(keyword => keyword !== element.textContent.trim());
        state.recipes.all = [ ...state.data ];
        state.subject.dispatch("set", state);
        state.subject.dispatch("update", state);
      };
    });
  }

  set(state) { state.recipes = { ...state.recipes, all: this.#setKeywords(state) }; }
}