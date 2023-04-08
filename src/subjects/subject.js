export default class Subject {
  constructor(store) {
    this.store = store;
    this.observers = { init: [], update: [], display: [] };
  }

  attach(type, observer) {
    this.observers[type].push(observer);
  }

  detach(type, observer) {
    this.observers[type].filter(obs => obs !== observer);
  }

  dispatch(type) {
    if (this.observers[type].length > 0) {
      if (type === 'init') return this.observers[type].forEach(observer => observer.init());
      if (type === 'update') return this.observers[type].forEach(observer => observer.update());
      if (type === 'display') return this.observers[type].forEach(observer => observer.display(this.store));
    }
  }
}