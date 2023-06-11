export default class FilterView {
  constructor(filterType, filters) {
    this.filterByType = {
      ingredients: { label: 'Ingredients', placeholder: 'ingrédients', list: 'ingredients' },
      appliances: { label: 'Appareils', placeholder: 'appareil', list: 'appliances' },
      ustensils: { label: 'Ustensiles', placeholder: 'ustensile', list: 'ustensils' }
    };

    this.filterType = filterType;
    this.label = this.filterByType[filterType].label;
    this.placeholder = this.filterByType[filterType].placeholder;
    this.list = filters[this.filterByType[filterType].list];
  }

  #FilterListDOM() {
    return this.list.map(item => `<li class="filter-item">${ item.split(' (', 1) }</li>`).join('');
  }

  displayFilter() {
    return (`
      <div class="filter filter-${ this.filterType }">
        <form>
          <label for="input-${ this.filterType }">${ this.label }</label>
          <input id="input-${ this.filterType }" type="search" placeholder="Rechercher un ${ this.placeholder }">
          <i class="icon-chevron-down"></i>
        </form>

        <ul class="filter-list filter-list-${ this.filterType }">${ this.#FilterListDOM() }</ul>
      </div>
    `);
  }
}