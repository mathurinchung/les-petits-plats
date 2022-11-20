import DropdownFactory from "../factories/dropdown.js";
import { FiltersListFactory } from "../factories/recipe.js";
import SearchUtils from "../utils/search.js";

export default class DropdownComponent {
  display({ filterType }) {
    const dropdownContainer = document.querySelector("#dropdown");

    dropdownContainer.innerHTML = filterType.map(type => {
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
      if (element.classList.contains("dropdown-ingredients")) return { ingredients: searchUtils.handle("filters", inputValue, itemTextContent) };
      if (element.classList.contains("dropdown-appliances")) return { appliances: searchUtils.handle("filters", inputValue, itemTextContent) };
      if (element.classList.contains("dropdown-ustensils")) return { ustensils: searchUtils.handle("filters", inputValue, itemTextContent) };
    }
  }

  handle(state) {
    const dropdownElements = document.querySelectorAll(".dropdown");

    dropdownElements.forEach(element => {
      const filterDropdownElements = [ ...dropdownElements ].filter(el => el !== element);
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

        const setState = { ...state };
        state.subject.dispatch("set", setState);

        const dropdownItemElements = element.querySelectorAll(".dropdown-item");
        const setFilters = new FiltersListFactory(setState.recipes);
        state.subject.dispatch("filters", setState, { ...setFilters , ...this.#handleOnInputDropdown(e, setState, element, [ ...dropdownItemElements ]) });
      };

      document.body.onclick = () => this.#handleCloseDropdown(dropdownElements);
    });
  }
}