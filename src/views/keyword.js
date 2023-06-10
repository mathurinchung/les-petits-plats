export default class KeywordView {
  constructor(type, keyword) {
    this.type = type;
    this.keyword = keyword;
  }

  displayKeyword() {
    return (`
      <li class="keyword-item keyword-item-${ this.type }">
        <span class="keyword-item-text">${ this.keyword }</span>
        <i class="icon-circle-xmark"></i>
      </li>
    `);
  }
}
