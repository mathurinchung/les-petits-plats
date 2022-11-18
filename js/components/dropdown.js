import DropdownFactory from "../factories/dropdown.js";
import KeywordsComponent from "./keywords.js";
import SearchUtils from "../utils/search.js";

export default class DropdownComponent {
  displayDropdown(state) {
    const dropdownContainer = document.querySelector("#dropdown");

    dropdownContainer.innerHTML = state.filterType.map(type => {
      const dropdownTemplate = new DropdownFactory(type);
      return dropdownTemplate.DropdownDOM();
    }).join("");
  }

  #handleToggleDropdown(element, filterDropdownElements, dropdownInputElement) {
    this.#handleCloseDropdown(filterDropdownElements);

    element.classList.toggle("show");
    dropdownInputElement.focus();
  }

  #handleCloseDropdown(elements) { elements.forEach(element => element.classList.remove("show")); }

  #handleOnInputDropdown(e, setState, element, dropdownItemElements) {
    const searchUtils = new SearchUtils(setState);
    const inputValue = e.target.value;
    const itemTextContent = dropdownItemElements.map(item => item.textContent);

    if (inputValue.length >= 3) {
      if (element.classList.contains("dropdown-ingredients"))  return { ingredients: searchUtils.handleSearch("filters", inputValue, itemTextContent) };
      if (element.classList.contains("dropdown-appliances"))  return { appliances: searchUtils.handleSearch("filters", inputValue, itemTextContent) };
      if (element.classList.contains("dropdown-ustensils"))  return { ustensils: searchUtils.handleSearch("filters", inputValue, itemTextContent) };
    }
  }

  handleDropdown(state) {
    const keywordsComponent = new KeywordsComponent();
    const dropdownElements = document.querySelectorAll(".dropdown");

    dropdownElements.forEach(element => {
      const filterDropdownElements = [ ...dropdownElements ].filter(el => el !== element);
      const dropdownInputElement = element.querySelector(".form-control");
      const dropdownItemElements = element.querySelectorAll(".dropdown-item");

      element.onclick = e => {
        e.preventDefault();
        e.stopPropagation();

        this.#handleToggleDropdown(element, filterDropdownElements, dropdownInputElement);
      };

      dropdownInputElement.onclick = e => e.stopPropagation();

      dropdownInputElement.oninput = e => {
        e.preventDefault();
        e.stopPropagation();

        const setState = { ...state };
        state.subject.dispatch("set", state);
        state.recipes = { ...state.recipes , ...this.#handleOnInputDropdown(e, setState, element, [ ...dropdownItemElements ]) };
        state.subject.dispatch("update", state);
      };

      dropdownItemElements.forEach(element => {
        element.onclick = e => {
          e.stopPropagation();
          dropdownInputElement.value = "";
          keywordsComponent.handleAddKeyword(e, state, element);
          keywordsComponent.handleRemoveKeywords(state);
        };

        document.querySelectorAll(".keyword-item-text").forEach(keyword => (keyword.textContent === element.textContent) && element.classList.add("active"));
      });

      document.body.onclick = () => this.#handleCloseDropdown(dropdownElements);
    });
  }

  update(state) { this.handleDropdown(state); }
}