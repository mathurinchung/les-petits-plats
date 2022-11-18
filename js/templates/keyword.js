export default class KeywordTemplate {
  KeywordDOM(type, keyword) {
    return `
      <li class="keyword-item keyword-item-${type} ">
        <span class="keyword-item-text">${keyword}</span>
        <i class="icon icon-circle-xmark"></i>
      </li>
    `;
  }
}