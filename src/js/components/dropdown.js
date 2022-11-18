import DropdownFactory from "../factories/dropdown.js";
import KeywordsComponent from "./keywords.js";
import SearchUtils from "../utils/search.js";

export default class DropdownComponent {
  displayDropdown(state) {
    const dropdownContainer = document.querySelector("#dropdown");

    let DropdownDOM = "";
    for (const type of state.filterType) {
      const dropdownTemplate = new DropdownFactory(type);
      DropdownDOM += dropdownTemplate.DropdownDOM();
    }

    dropdownContainer.innerHTML = DropdownDOM;
  }

  #handleToggleDropdown(element, filterDropdownElements, dropdownInputElement) {
    this.#handleCloseDropdown(filterDropdownElements);

    element.classList.toggle("show");
    dropdownInputElement.focus();
  }

  #handleCloseDropdown(elements) {
    for (const element of elements) {
      element.classList.remove("show");
    }
  }

  #handleOnInputDropdown(e, setState, element, dropdownItemElements) {
    const searchUtils = new SearchUtils(setState);
    const inputValue = e.target.value;

    let itemTextContent = [];
    for (const item of dropdownItemElements) {
      itemTextContent[itemTextContent.length] = item.textContent; // push method
    }

    if (inputValue.length >= 3) {
      if (element.classList.contains("dropdown-ingredients"))  return { ingredients: searchUtils.handleSearch("filters", inputValue, itemTextContent) };
      if (element.classList.contains("dropdown-appliances"))  return { appliances: searchUtils.handleSearch("filters", inputValue, itemTextContent) };
      if (element.classList.contains("dropdown-ustensils"))  return { ustensils: searchUtils.handleSearch("filters", inputValue, itemTextContent) };
    }
  }

  handleDropdown(state) {
    const keywordsComponent = new KeywordsComponent();
    const dropdownElements = [ ...document.querySelectorAll(".dropdown") ];

    for (const element of dropdownElements) {
      const filterDropdownElements = [];
      for (const el of dropdownElements) {
        if (el !== element) filterDropdownElements[filterDropdownElements.length] = el; // filter method
      }

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

      for (const element of [ ...dropdownItemElements ]) {
        element.onclick = e => {
          e.stopPropagation();
          dropdownInputElement.value = "";
          keywordsComponent.handleAddKeyword(e, state, element);
          keywordsComponent.handleRemoveKeywords(state);
        };

        for (const keyword of [ ...document.querySelectorAll(".keyword-item-text") ]) {
          (keyword.textContent === element.textContent) && element.classList.add("active");
        }
      }

      document.body.onclick = () => this.#handleCloseDropdown(dropdownElements);
    }
  }

  update(state) { this.handleDropdown(state); }
}