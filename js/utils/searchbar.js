export default class SearchbarUtils {
  constructor() {}

  searchbarHandler() {
    return e => console.log(e.target.value);
  }

  handler() {
    const searchbar = document.querySelector("#searchbar");
    const searchbarHandler = this.searchbarHandler();

    searchbar.addEventListener("input", searchbarHandler);
  }
}