import SearchbarContainer from '../containers/searchbar.js';

export default class SearchbarObserver {
  constructor(searchbarSubject) {
    this.searchbarSubject = searchbarSubject;
    this.recipes = document.querySelectorAll('.recipe-card');
    this.searchbar = document.querySelector('#searchbar');
    this.searchbarContainer = new SearchbarContainer(this.searchbarIcon);
  }

  init() {

    this.searchbar.addEventListener('input', e => {
      this.searchbarContainer.handleInput(e);
    });
  }
}
