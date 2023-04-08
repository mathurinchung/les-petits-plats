export default class FilterViews {
  constructor(type, filters) {
    this.type = type;

    switch (type) {
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

  FilterListDOM() {

  }

  FilterDOM() {
    return `
      <div class="filter filter-${ this.type }">
        <form>
          <label for="">${ this.label }</label>
          <input id="" type="search" placeholder="Rechercher un ${ this.placeholder }">
          <i class="icon-chevron-down"></i>
        </form>

        <ul class="filter-list filter-list-${ this.type }">${ this.list }</ul>
      </div>
    `;
  }
}