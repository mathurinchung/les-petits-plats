import { filterType } from '../utils/filtertype.js';

export default class KeywordContainer {
  constructor(subject, renderKeyword) {
    this.subject = subject;
    this.renderKeyword = renderKeyword;
    this.keywords = [];
    this.filterItemElements = document.querySelectorAll('.filter-item');
    this.seachBar = document.querySelector('#searchbar');
  }

  getSearchTerm(searchValue) {
    const terms = this.keywords.map(keyword => keyword).join(' ');
    return terms ? `${ terms } ${ searchValue }`.trim() : searchValue.trim();
  }

  handleAddKeyword() {
    return (event) => {
      if (!event.target.matches('.filter-item')) return;
      
      event.stopPropagation();
      
      const keyword = event.target.textContent;
      this.keywords.push(keyword);
      
      document.querySelector("#keywords").classList.add("show");
      this.filterItemElements.forEach(itemElement => (itemElement.textContent === keyword) && itemElement.classList.add('active'));

      const type = filterType(event.target);
      const keywordListElement = document.querySelector(`.keyword-list-${ type }`);
      keywordListElement.innerHTML += this.renderKeyword(type, keyword);
      
      const searchValue = this.seachBar.value;
      this.subject.dispatch(this.getSearchTerm(searchValue));
    };
  }

  handleRemoveKeyword() {
    return (event) => {
      if (!event.target.matches('.icon-circle-xmark')) return;

      const element = event.target.parentElement;
      const textContent = element.querySelector('.keyword-item-text').textContent;

      const index = this.keywords.indexOf(textContent);
      if (index !== -1) this.keywords.splice(index, 1);

      element.remove();
      this.filterItemElements.forEach(itemElement => {
        (itemElement.classList.contains('active') && itemElement.textContent === textContent) && itemElement.classList.remove('active');
      });

      const searchValue = this.seachBar.value;
      this.subject.dispatch(this.getSearchTerm(searchValue));

      if (this.keywords.length === 0) document.querySelector("#keywords").classList.remove("show");
    };
  }
}
