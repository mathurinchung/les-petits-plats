export default class DropdownTemplate {
  constructor(type, textContent, fn) {
    this.type = type;
    this.textContent = textContent;
    this.fn = fn;
  }

  DropdownDOM() {
    return `
      <div class="dropdown dropdown-${this.type}">
        <button class="btn btn-${this.type} dropdown-toggle d-flex justify-content-between align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          ${this.textContent}
          <i class="icon icon-chevron-down" aria-hidden="true"></i>
        </button>
        <ul class="dropdown-menu">${this.fn}</ul>
      </div>
    `;
  }
}