export default class KeywordsUtils {
  constructor() {}

  removeKeywordHandler() {}

  keywordsHandler() {
    const addKeywordDOM = "";
    const removeKeyWordDOM = [ ...document.querySelectorAll(".keyword-item .icon-circle-xmark") ];

    removeKeyWordDOM.addEventListener("click", () => this.removeKeywordHandler());
  }
}