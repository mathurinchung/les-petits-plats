export default class SearchbarContainer {
  constructor(subject) {
    this.subject = subject;
    this.searchBar = document.querySelector('#searchbar');
    this.searchIcon = document.querySelector('#searchlabel i');
  }

  handleInput(keywords) {
    return (event) => {
      const searchValue = event.target.value;

      this.searchIcon.className = (searchValue.length >= 1) ? 'icon-circle-xmark' : 'icon-magnifying-glass';

      if (searchValue.length >= 3 || searchValue.length === 0) {
        const searchTerm = keywords ? `${ keywords } ${ searchValue }`.trim() : searchValue.trim();
        this.subject.dispatch(searchTerm);
      }
    };
  }

  handleClick(keywords) {
    if (!this.searchIcon.classList.contains('icon-circle-xmark')) return;

    this.searchBar.value = '';
    this.searchIcon.className = 'icon-magnifying-glass';

    const elements = document.querySelectorAll('.none');
    elements.forEach(element => element.classList.remove('none'));

    this.subject.dispatch(keywords);
  }
}
