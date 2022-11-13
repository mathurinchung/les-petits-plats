export default class DropdownTemplate {
  constructor(type, textContent, placeholder, fn) {
    this.type = type;
    this.textContent = textContent;
    this.placeholder = placeholder;
    this.fn = fn;
  }

  DropdownDOM() {
    return `
      <div class="dropdown dropdown-${this.type} d-flex">
        <form class="input-group d-inline-flex justify-content-between align-items-center">
          <label for="${this.type}Input" class="input-group-text">${this.textContent}</label>
          <input id="${this.type}Input" class="form-control shadow-none" name="${this.type}Input" type="search" placeholder="Rechercher un ${this.placeholder}">
          <i class="icon icon-chevron-down" aria-hidden="true"></i>
        </form>

        <ul class="dropdown-list">${this.fn}</ul>
      </div>
    `;
  }
}