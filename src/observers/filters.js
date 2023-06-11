import FilterContainer from '../containers/filter.js';

export default class FiltersObserver {
  constructor() {
    this.filterContainer = new FilterContainer();
    this.filterElements = document.querySelectorAll('.filter');
  }

  init() {
    document.body.addEventListener('click', () => {
      this.filterElements.forEach(element => {
        const notElements = [ ...this.filterElements ].filter(el => el !== element);
        this.filterContainer.handleCloseFilter(notElements);
      });
    });

    this.filterElements.forEach(element => {
      const notElements = [ ...this.filterElements ].filter(el => el !== element);
      const filterInputElement = element.querySelector('input');
      const filterItemElements = element.querySelectorAll('.filter-item');

      const handleOpenFilter = this.filterContainer.handleOpenFilter(element, notElements);
      element.addEventListener('click', handleOpenFilter);

      filterInputElement.addEventListener('click', (event) => event.stopPropagation());

      const handleInput = this.filterContainer.handleInput(filterItemElements);
      filterInputElement.addEventListener('input', handleInput);
    });
  }
}
