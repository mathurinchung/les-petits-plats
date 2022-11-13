export default class DropdownUtils {
  constructor() {}

  #handleToggleDropdown(element, filterElements, inputElement) {
    this.#handleCloseDropdown(filterElements);

    element.classList.toggle("show");
    inputElement.focus();
  }

  #handleCloseDropdown(elements) {
    elements.forEach(element => element.classList.remove("show"));
  }

  handler() {
    const dropdownElements = document.querySelectorAll(".dropdown");

    dropdownElements.forEach(element => {
      const filterElements = [ ...dropdownElements ].filter(el => el !== element);
      const inputElement = element.querySelector(".form-control");
      const itemElement = element.querySelectorAll(".dropdown-item");

      element.onclick = e => {
        e.preventDefault();
        e.stopPropagation();

        this.#handleToggleDropdown(element, filterElements, inputElement);
      };

      inputElement.onclick = e => e.stopPropagation();

      itemElement.forEach(element => {
        element.onclick = e => {
          e.stopPropagation();
          console.log(e.target.textContent);
        };
      });

      document.body.onclick = () => this.#handleCloseDropdown(dropdownElements);
    });
  }
}