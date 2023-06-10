import FilterContainer from '../containers/filter.js';

export default class FiltersObserver {
  constructor() {
    this.filterContainer = new FilterContainer();
    this.filterElements = document.querySelectorAll('.filter');
  }

  init() {
    this.filterElements.forEach(element => {
      const notElements = [ ...this.filterElements ].filter(el => el !== element);
      const filterInputElement = element.querySelector('input');
      const filterItemElements = element.querySelectorAll('.filter-item');

      const handleToggleFilter = this.filterContainer.handleToggleFilter(element, notElements);
      element.addEventListener('click', handleToggleFilter);

      document.body.addEventListener('click', () => this.filterContainer.handleCloseFilter(notElements));

      filterInputElement.addEventListener('click', (event) => event.stopPropagation());

      const handleInput = this.filterContainer.handleInput(filterItemElements);
      filterInputElement.addEventListener('input', handleInput);
    });
  }
}
