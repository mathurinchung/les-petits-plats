export default class FilterView {
  constructor(type, filters) {
    this.type = type;

    switch (this.type) {
      case 'ingredients':
        this.label = 'Ingredients';
        this.placeholder = 'ingrédients';
        this.list = filters.ingredients;
        break;
      case 'appliances':
        this.label = 'Appareils';
        this.placeholder = 'appareil';
        this.list = filters.appliances;
        break;
      case 'ustensils':
        this.label = 'Ustensiles';
        this.placeholder = 'ustensile';
        this.list = filters.ustensils;
        break;
      default: null;
    }
  }

  #FilterListDOM() {
    return this.list.map(item => `<li class="filter-item">${ item.split(' (', 1) }</li>`).join('');
  }

  displayFilter() {
    return (`
      <div class="filter filter-${ this.type }">
        <form>
          <label for="input-${ this.type }">${ this.label }</label>
          <input id="input-${ this.type }" type="search" placeholder="Rechercher un ${ this.placeholder }">
          <i class="icon-chevron-down"></i>
        </form>

        <ul class="filter-list filter-list-${ this.type }">${ this.#FilterListDOM() }</ul>
      </div>
    `);
  }
}