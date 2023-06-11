import { formatText } from '../utils/string.js';

export default class FilterContainer {
  #closeFilter(element) {
    element.classList.remove('show');
    element.querySelector('input').value = '';
  }

  handleToggleFilter(element, notElements) {
    return (event) => {
      event.preventDefault();
      event.stopPropagation();

      const filterInputElement = element.querySelector('input');

      this.handleCloseFilter(notElements);

      element.classList.toggle('show');

      if (element.classList.contains('show')) {
        filterInputElement.focus();
      } else {
        this.#closeFilter(element);
      }
    };
  }

  handleCloseFilter(notElements) {
    notElements.forEach(element => {
      if (element.classList.contains('show')) this.#closeFilter(element);
    });
  }

  handleInput(filterItemElements) {
    return (event) => {
      const searchTerm = formatText(event.target.value);
      
      if (searchTerm.length >= 3 || searchTerm.length === 0) {
        filterItemElements.forEach(element => {
          if (!element.classList.contains('none')) {
            const isMatchTerm = formatText(element.textContent).includes(searchTerm);
            element.classList.toggle('notFilter', !isMatchTerm);
          }
        });
      }
    };
  }
}
