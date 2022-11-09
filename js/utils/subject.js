export default class ComponentsSubject {
  constructor() { this.observers = []; }

  attach(observer) { this.observers.push(observer); }

  detach(observer) { this.observers = this.observers.filter(obs => obs !== observer); }

  notify() { this.observers.forEach(obs => obs.handler()); }
}