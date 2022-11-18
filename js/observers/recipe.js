export default class RecipeSubject {
  constructor() {
    this.observers = { set: [], update: [] };
  }

  attach(type, observer) {
    this.observers[type].push(observer);
  }

  // detach(observer) {
  //   this.observers = this.observers.filter(obs => obs !== observer);
  // }

  dispatch(type, state) {
    if (this.observers[type].length > 0) {
      if (type === "set") return this.observers[type].forEach(obs => obs.set(state));
      if (type === "update") return this.observers[type].forEach(obs => obs.update(state));
    }
  }
}