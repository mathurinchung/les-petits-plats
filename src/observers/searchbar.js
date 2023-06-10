import SearchbarContainer from '../containers/searchbar.js';

export default class SearchbarObserver {
  constructor(updateRender, getKeywords) {
    this.searchbarContainer = new SearchbarContainer(updateRender, getKeywords);
  }

  init() {
    const searchBar = document.querySelector('#searchbar');
    searchBar.addEventListener('input', (event) => this.searchbarContainer.handleInput(event));

    const searchLabelIcon = document.querySelector('#searchlabel i');
    searchLabelIcon.addEventListener('click', () => this.searchbarContainer.handleClick());
  }
}
