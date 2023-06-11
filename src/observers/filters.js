import FilterContainer from '../containers/filter.js';

export default class FiltersObserver {
  constructor() {
    this.filterContainer = new FilterContainer();
  }

  init() {
    const filterElements = document.querySelectorAll('.filter');

    document.body.addEventListener('click', () => {
      filterElements.forEach(element => {
        const notFilterElements = [ ...this.filterElements ].filter(el => el !== element);
        this.filterContainer.handleCloseFilter(notFilterElements);
      });
    });

    filterElements.forEach(element => {
      const notFilterElements = [ ...filterElements ].filter(el => el !== element);
      element.addEventListener('click', (event) => this.filterContainer.handleOpenFilter(element, notFilterElements)(event));

      const filterInputElement = element.querySelector('input');
      const filterItemElements = element.querySelectorAll('.filter-item');
      filterInputElement.addEventListener('click', (event) => event.stopPropagation());
      filterInputElement.addEventListener('input', (event) => this.filterContainer.handleInput(filterItemElements)(event));
    });
  }
}
