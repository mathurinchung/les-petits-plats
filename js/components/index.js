import KeywordsComponent from "./keywords.js";
import CardComponent from "./card.js";
import FiltersComponent from "./filters.js";
import DropdownComponent from "./dropdown.js";
import SearchbarComponent from "./searchbar.js";

export default class Components {
  init(state) {
    const keywordsComponents = new KeywordsComponent();
    const cardComponent = new CardComponent();
    const filtersComponent = new FiltersComponent();
    const dropdownComponent = new DropdownComponent();
    const searchbarComponent = new SearchbarComponent();

    state.subject.attach("keywords", keywordsComponents);
    state.subject.attach("cards", cardComponent);
    state.subject.attach("filters", filtersComponent);
    state.subject.attach("handle", dropdownComponent);
    state.subject.attach("handle", searchbarComponent);

    dropdownComponent.display(state);
  }
}