import CardComponent from "./card.js";
import KeywordsComponent from "./keywords.js";
import FiltersComponent from "./filters.js";
import DropdownComponent from "./dropdown.js";
import SearchbarComponent from "./searchbar.js";

export default class Components {
  init(state) {
    const cardComponent = new CardComponent();
    state.subject.attach("update", cardComponent);

    const keywordsComponents = new KeywordsComponent();
    state.subject.attach("set", keywordsComponents);

    const filtersComponent = new FiltersComponent();
    state.subject.attach("set", filtersComponent);
    state.subject.attach("update", filtersComponent);

    const dropdownComponent = new DropdownComponent();
    dropdownComponent.displayDropdown(state);
    state.subject.attach("update", dropdownComponent);

    const searchbarComponent = new SearchbarComponent();
    searchbarComponent.handleSearchbar(state);
  }
}