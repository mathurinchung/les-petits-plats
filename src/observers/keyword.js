import Keywordcontainer from '../containers/keyword.js';

export default class KeywordObserver {
  constructor(updateRender, renderKeyword) {
    this.keywordContainer = new Keywordcontainer(updateRender, renderKeyword);
  }

  init() {
    const filterItemElements = document.querySelectorAll('.filter-item');
    const keywordListElements = document.querySelectorAll('.keyword-list');

    const handleAddKeyword = this.keywordContainer.handleAddKeyword();
    filterItemElements.forEach(itemElement => itemElement.addEventListener('click', handleAddKeyword));

    const handleRemoveKeyword = this.keywordContainer.handleRemoveKeyword();
    keywordListElements.forEach(itemElement => itemElement.addEventListener('click', handleRemoveKeyword));
  }
}