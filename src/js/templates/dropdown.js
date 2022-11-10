export default class DropdownTemplate {
  constructor(type, textContent, fn) {
    this.type = type;
    this.textContent = textContent;
    this.fn = fn;
  }

  DropdownDOM(type, textContent) {
    return `
      <div class="dropdown dropdown-${type}">
        <button class="btn btn-${type} dropdown-toggle d-flex justify-content-between align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          ${textContent}
          <i class="icon icon-chevron-down" aria-hidden="true"></i>
        </button>
        <ul class="dropdown-menu">${this.fn}</ul>
      </div>
    `;
  }
}