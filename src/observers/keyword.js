import KeywordContainer from '../containers/keyword.js';

export default class KeywordObserver {
  constructor(subject, renderKeyword) {
    this.subject = subject;
    this.keywordContainer = new KeywordContainer(subject, renderKeyword);
  }

  update(terms) {
    this.subject.updateRender(terms);
    this.subject.detach(this);
  }

  init() {
    const handleAddKeyword = this.keywordContainer.handleAddKeyword();
    const handleRemoveKeyword = this.keywordContainer.handleRemoveKeyword();

    const filterItemElements = document.querySelectorAll('.filter-item');
    filterItemElements.forEach(itemElement => itemElement.addEventListener('click', (event) => {
      this.subject.attach(this);
      handleAddKeyword(event);
    }));

    const keywordListElements = document.querySelectorAll('.keyword-list');
    keywordListElements.forEach(itemElement => itemElement.addEventListener('click', (event) => {
      this.subject.attach(this);
      handleRemoveKeyword(event);
    }));
  }
}