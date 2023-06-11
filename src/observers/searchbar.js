import SearchbarContainer from '../containers/searchbar.js';

export default class SearchbarObserver {
  constructor(subject) {
    this.subject = subject;
    this.searchbarContainer = new SearchbarContainer(subject);
    this.searchBar = document.querySelector('#searchbar');
    this.searchIcon = document.querySelector('#searchlabel i');
  }

  update(terms) {
    this.subject.updateRender(terms);
    this.subject.detach(this);
  }

  init() {
    this.searchBar.focus();
    this.searchBar.addEventListener('input', (event) => {
      this.subject.attach(this);
      const keywords = this.subject.getKeywords();
      this.searchbarContainer.handleInput(keywords)(event);
    });

    this.searchIcon.addEventListener('click', () => {
      this.subject.attach(this);
      const keywords = this.subject.getKeywords();
      this.searchbarContainer.handleClick(keywords);
    });
  }
}
