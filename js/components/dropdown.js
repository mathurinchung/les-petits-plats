import DropdownFactory from "../factories/dropdown.js";
import { FiltersListFactory } from "../factories/recipe.js";
import SearchUtils from "../utils/search.js";

export default class DropdownComponent {
  display({ filterType }) {
    const dropdownContainer = document.querySelector("#dropdown");

    const dropdownDOM = [];
    for (const type of filterType) {
      const dropdownTemplate = new DropdownFactory(type);
      dropdownDOM[dropdownDOM.length] = dropdownTemplate.DropdownDOM(); // map method
    }

    dropdownContainer.innerHTML = dropdownDOM.join("");
  }

  #handleToggleDropdown(element, filterDropdownElements, dropdownInputElement) {
    this.#handleCloseDropdown(filterDropdownElements);

    element.classList.toggle("show");
    dropdownInputElement.focus();
  }

  #handleCloseDropdown(elements) {
    for (const element of elements) { element.classList.remove("show"); } // forEach method
  }

  #handleOnInputDropdown(e, setState, element, dropdownItemElements) {
    const searchUtils = new SearchUtils(setState);
    const inputValue = e.target.value;
    const itemTextContent = [];

    for (const item of dropdownItemElements) { itemTextContent[itemTextContent.length] = item.textContent; }  // map method

    if (inputValue.length >= 3) {
      if (element.classList.contains("dropdown-ingredients")) return { ingredients: searchUtils.handle("filters", inputValue, itemTextContent) };
      if (element.classList.contains("dropdown-appliances")) return { appliances: searchUtils.handle("filters", inputValue, itemTextContent) };
      if (element.classList.contains("dropdown-ustensils")) return { ustensils: searchUtils.handle("filters", inputValue, itemTextContent) };
    }
  }

  handle(state) {
    const dropdownElements = document.querySelectorAll(".dropdown");

    for (const element of dropdownElements) {
      const filterDropdownElements = [];
      for (const el of [ ...dropdownElements ]) { if (el !== element) filterDropdownElements[filterDropdownElements.length] = el; } // filter method

      const dropdownInputElement = element.querySelector(".form-control");

      element.onclick = e => {
        e.preventDefault();
        e.stopPropagation();

        this.#handleToggleDropdown(element, filterDropdownElements, dropdownInputElement);
      };

      dropdownInputElement.onclick = e => e.stopPropagation();
      dropdownInputElement.oninput = e => {
        e.preventDefault();
        e.stopPropagation();

        const searchbarElement = document.querySelector("#searchbar");
        const setState = { ...state };
        setState.recipes = new SearchUtils(setState).handle("recipes", searchbarElement.value);

        const dropdownItemElements = element.querySelectorAll(".dropdown-item");
        const setFilters = new FiltersListFactory(setState.recipes);
        state.subject.dispatch("filters", setState, { ...setFilters , ...this.#handleOnInputDropdown(e, setState, element, [ ...dropdownItemElements ]) });
      };

      document.body.onclick = () => this.#handleCloseDropdown(dropdownElements);
    }
  }
}