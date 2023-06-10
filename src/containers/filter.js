import { formatText } from '../utils/string.js';

export default class FilterContainer {
  handleToggleFilter(element, notElements) {
    return (event) => {
      event.preventDefault();
      event.stopPropagation();

      this.handleCloseFilter(notElements);

      element.classList.toggle('show');
      element.querySelector('input').focus();
    };
  }

  handleCloseFilter(notElements) {
    notElements.forEach(el => {
      el.classList.contains('show') && el.classList.remove('show');
      el.querySelector('input').value = '';
    });
  }

  handleInput(filterItemElements) {
    return (event) => {
      const searchTerm = formatText(event.target.value);
      
      if (searchTerm.length >= 3 || searchTerm.length === 0) {
        const filterItems = [...filterItemElements].filter(element => !element.classList.contains('none'));
        const isMatchTerm = filterItems.filter(el => !el.classList.contains('none') && formatText(el.textContent).includes(searchTerm));

        filterItems.forEach((item) => {
          item.classList.toggle('not', !isMatchTerm.map(el => el.textContent).includes(item.textContent));
        });
      }
    };
  }
}
