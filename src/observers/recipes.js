import SearchbarContainer from '../containers/searchbar.js';
import KeywordContainer from '../containers/keyword.js';

export default class RecipesObserver {
  constructor(subject, renderKeyword) {
    this.subject = subject;
    this.subject.attach(this);

    this.searchbarContainer = new SearchbarContainer(subject);
    this.keywordContainer = new KeywordContainer(subject, renderKeyword);
  }

  update(terms) {
    this.subject.updateRender(terms);
    // this.subject.detach(this);
  }

  init() {
    const searchBar = document.querySelector('#searchbar');
    const searchIcon = document.querySelector('#searchlabel i');
    const filterItemElements = document.querySelectorAll('.filter-item');
    const keywordListElements = document.querySelectorAll('.keyword-list');

    searchBar.focus();
    searchBar.addEventListener('input', (event) => {
      const keywords = this.subject.getKeywords();
      this.searchbarContainer.handleInput(keywords)(event);
    });

    searchIcon.addEventListener('click', () => {
      const keywords = this.subject.getKeywords();
      this.searchbarContainer.handleClick(keywords);
    });

    filterItemElements.forEach(itemElement => itemElement.addEventListener('click', (event) => this.keywordContainer.handleAddKeyword(event)));
    keywordListElements.forEach(itemElement => itemElement.addEventListener('click', (event) => this.keywordContainer.handleRemoveKeyword(event)));
  }
}
