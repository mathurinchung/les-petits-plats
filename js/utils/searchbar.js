export default class SearchbarUtils {
  constructor() {}

  searchbarFilter() {}

  searchbarHandler() {}

  handler() {
    const searchbar = document.querySelector("#searchbar");
    
    searchbar.oninput = e => console.log(e.target.value);
  }
}