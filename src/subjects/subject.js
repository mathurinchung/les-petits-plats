export default class Subject {
  constructor() {
    this.observers = [];
  }

  attach(observer) {
    this.observers.push(observer);
  }

  detach(observer) {
    this.observers = this.observers.filter(obs => obs !== observer)
  }

  dispatch() {
    this.observers.forEach(observer => observer.init());
  }
}