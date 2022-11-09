export default class KeywordsUtils {
  constructor() {}

  removeKeywordHandler() {}

  handler() {
    const removeKeywordDOM = [ ...document.querySelectorAll(".keyword-item .icon-circle-xmark") ];

    for (let element of removeKeywordDOM) {
      element.addEventListener("click", () => this.removeKeywordHandler());
    }
  }
}