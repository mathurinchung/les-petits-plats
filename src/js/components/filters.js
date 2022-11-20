import FiltersFactory from "../factories/filters.js";
import KeywordsComponent from "./keywords.js";

export default class FiltersComponent {
  display(state, setFilters) {
    state.filterType.map(type => {
      const dropdownListElement = document.querySelector(".dropdown-list-" + type);
      const filtersFactory = new FiltersFactory(type, setFilters);
      dropdownListElement.innerHTML = filtersFactory.DropdownListDOM();
    });

    const dropdownItemElements = document.querySelectorAll(".dropdown-item");
    const dropdownInputElement = document.querySelector(".dropdown .form-control");
    const keywordsComponent = new KeywordsComponent();
    dropdownItemElements.forEach(element => {
      element.onclick = e => {
        e.stopPropagation();

        dropdownInputElement.value = "";
        keywordsComponent.handleAddKeyword(e, state, element);
        keywordsComponent.handleRemoveKeywords(state);
      };

      document.querySelectorAll(".keyword-item-text").forEach(keyword => (keyword.textContent === element.textContent) && element.classList.add("active"));
    });
  }
}