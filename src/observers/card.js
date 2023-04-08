import CardView from '../views/card.js';

export default class CardObserver {
  constructor(subject) {
    this.subject = subject;
  }

  display(store) {
    const recipesElement = document.querySelector('#recipes')
    recipesElement.innerHTML = store.recipes.map(recipe => {
      const cardView = new CardView(recipe);
      return cardView.RecipeCardDOM();
    }).join('');
  }

  init() {
    this.subject.attach('display', this);
    this.subject.dispatch('display');
  }
}