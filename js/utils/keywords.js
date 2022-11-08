export default class KeywordsUtils {
  constructor() {}

  removeKeywordHandler() {}

  handler() {
    const removeKeywordDOM = [ ...document.querySelectorAll(".keyword-item .icon-circle-xmark") ];

    removeKeywordDOM.forEach(el => el.addEventListener("click", () => this.removeKeywordHandler()));
  }
}