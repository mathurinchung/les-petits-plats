import { filterType } from '../utils/filtertype.js';

export default class Keywordcontainer {
  constructor(updateRender, renderKeyword) {
    this.updateRender = updateRender;
    this.renderKeyword = renderKeyword;
    this.keywords = [];
  }

  handleAddKeyword() {
    return (event) => {
      event.stopPropagation();

      const keyword = event.target.textContent;
      this.keywords.push(keyword);
      
      document.querySelector("#keywords").classList.add("show");
      event.target.classList.add('active');
      
      const type = filterType(event.target);
      const keywordListElement = document.querySelector(`.keyword-list-${ type }`);
      keywordListElement.innerHTML += this.renderKeyword(type, keyword);
      
      const terms = this.keywords.map(keyword => keyword).join(' ');
      this.updateRender(terms);
    };
  }

  handleRemoveKeyword() {
    return (event) => {
      if (event.target.matches('.icon-circle-xmark')) {
        const element = event.target.parentElement;
        const textContent = element.querySelector('.keyword-item-text').textContent;

        const index = this.keywords.indexOf(textContent);
        if (index !== -1) this.keywords.splice(index, 1);

        const filterItemElements = document.querySelectorAll('.filter-item');
        const filterItem = [ ...filterItemElements ].find(itemElement => itemElement.classList.contains('active') && itemElement.textContent === textContent);

        element.remove();
        if (filterItem) filterItem.classList.remove('active');

        const terms = (this.keywords.length > 0) ? this.keywords.map(keyword => keyword).join(' ') : '';
        this.updateRender(terms);

        if (this.keywords.length === 0) document.querySelector("#keywords").classList.remove("show");
      }
    };
  }
}
