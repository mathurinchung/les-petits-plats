import FiltersFactory, { FiltersListFactory } from "../factories/filters.js";

export default class FiltersComponent {
  #setFilters(state) {
    const filters = new FiltersListFactory();
    return { ...state.recipes, ...filters.filterList(state.recipes.all) };
  }

  #displayFilters(state) {
    state.filterType.map(type => {
      const dropdownListElement = document.querySelector(".dropdown-list-" + type);
      const filtersFactory = new FiltersFactory(type, state.recipes);
      dropdownListElement.innerHTML = filtersFactory.DropdownListDOM();
    });
  }

  set(state) { state.recipes = this.#setFilters(state); }

  update(state) { this.#displayFilters(state); }
}