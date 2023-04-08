export default class SearchbarContainer {
  constructor() {}

  handleClear() {
    console.log('clear');
  }

  handleInput(e) {
    const searchbarLabel = document.querySelector('#search label');
    const searchbarIcon = searchbarLabel.querySelector('i');
    if (e.target.value.length >= 1) searchbarIcon.className = 'icon-circle-xmark';
    if (e.target.value.length === 0) searchbarIcon.className = 'icon-magnifying-glass';
  }
}
