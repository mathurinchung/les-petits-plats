import { formatText } from '../utils/string.js';

export default class FilterContainer {
  handleOpenFilter(element, notElements) {
    return (event) => {
      event.preventDefault();
      event.stopPropagation();

      this.handleCloseFilter(notElements);

      if (!element.classList.contains('show')) {
        element.classList.add('show');
        element.querySelector('input').focus();
      }
    };
  }

  handleCloseFilter(notElements) {
    notElements.forEach(el => {
      if (el.classList.contains('show')) {
        el.classList.remove('show');
        el.querySelector('input').value = '';
      }
    });
  }

  handleInput(filterItemElements) {
    return (event) => {
      const searchTerm = formatText(event.target.value);
      
      if (searchTerm.length >= 3 || searchTerm.length === 0) {
        filterItemElements.forEach(element => {
          if (!element.classList.contains('none')) {
            const isMatchTerm = formatText(element.textContent).includes(searchTerm);
            element.classList.toggle('not', !isMatchTerm);
          }
        });
      }
    };
  }
}
