export default class ComponentsTemplate {
  KeywordDOM(type, keyword) {
    return `
      <li class="keyword-item keyword-${type}">
        <span class="keyword-text">${keyword}</span>
        <i class="icon icon-circle-xmark"></i>
      </li>
    `;
  }

  DropdownDOM(type, textContent) {
    const dropdownContainer = document.querySelector("#dropdown");

    dropdownContainer.innerHTML += `
      <div class="dropdown dropdown-${type}">
        <button class="btn btn-${type} dropdown-toggle d-flex justify-content-between align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          ${textContent}
          <i class="icon icon-chevron-down" aria-hidden="true"></i>
        </button>
        <ul class="dropdown-menu"></ul>
      </div>
    `;
  }
}