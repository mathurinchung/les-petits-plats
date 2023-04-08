export default class SearchbarObserver {
  constructor(subject) {
    this.subject = subject;
    this.searchbar = document.querySelector('#searchbar');
  }

  #handleClearInput() {
    console.log('clear');
    const searchbarIcon = document.querySelector('#search label i');
    searchbarIcon.className = 'icon-magnifying-glass';
    document.querySelector('#searchbar').value = '';
  }

  #handleInput(e) {
    const searchbarIcon = document.querySelector('#search label i');

    if (e.target.value.length >= 1) {
      searchbarIcon.className = 'icon-circle-xmark';
      this.subject.dispatch('update');
    }

    if (e.target.value.length === 0) {
      searchbarIcon.className = 'icon-magnifying-glass';
      this.subject.detach('update', this);
    }
  }

  update() {
    const searchbarLabel = document.querySelector('#search label');
    searchbarLabel.addEventListener('click', e => {
      this.subject.detach('update', this);
      this.#handleClearInput(e)
    });
  }

  init() {
    this.searchbar.addEventListener('input', e => {
      this.subject.attach('update', this);
      this.#handleInput(e);
    });
  }
}