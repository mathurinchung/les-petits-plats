export default class SearchbarContainer {
  constructor(updateRender, getKeywords) {
    this.updateRender = updateRender;
    this.getKeywords = getKeywords;
    this.searchBar = document.querySelector('#searchbar');
    this.searchIcon = document.querySelector('#searchlabel i')
  }

  handleInput(event) {
    const searchValue = event.target.value;
    const keywords = this.getKeywords();

    this.searchIcon.className = (searchValue.length >= 1) ? 'icon-circle-xmark' : 'icon-magnifying-glass';

    if (searchValue.length >= 3 || searchValue.length === 0) {
      const searchTerm = keywords.trim() ? (searchValue.trim() ? keywords + ' ' + searchValue : keywords) : (searchValue.trim() ? searchValue : '');

      this.updateRender(searchTerm);
    }
  }

  handleClick() {
    if (this.searchIcon.classList.contains('icon-circle-xmark')) {
      const keywords = this.getKeywords();

      this.searchBar.value = '';
      this.searchIcon.className = 'icon-magnifying-glass';

      const elements = document.querySelectorAll('.none');
      elements.forEach(element => element.classList.remove('none'));

      this.updateRender(keywords);
    }
  }
}
