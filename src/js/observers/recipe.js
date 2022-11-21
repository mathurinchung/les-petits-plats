export default class RecipeSubject {
  constructor() {
    this.observers = { cards: [], filters: [], handle: [] };
  }

  attach(type, observer) {
    this.observers[type].push(observer);
  }

  // detach(observer) {
  //   this.observers = this.observers.filter(obs => obs !== observer);
  // }

  dispatch(type, state, ...args) {
    if (this.observers[type].length > 0) {
      if (type === "cards") return this.observers[type].forEach(obs => obs.display(state));
      if (type === "filters") return this.observers[type].forEach(obs => obs.display(state, ...args));
      if (type === "handle") return this.observers[type].forEach(obs => obs.handle(state));
    }
  }
}