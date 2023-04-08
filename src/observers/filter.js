import FilterView from '../views/filter.js';

export default class FilterObserver {
  constructor(subject) {
    this.subject = subject;
  }

  display(store) {
    const filterType = [ 'ingredients', 'appliances', 'ustensils' ];
    const filtersElement = document.querySelector('#filters');
    filtersElement.innerHTML = filterType.map(type => {
      const filterView = new FilterView(type, store.filters);
      return filterView.FilterDOM();
    }).join('');
  }

  init() {
    this.subject.attach('display', this);
    this.subject.dispatch('display');
  }
}