import Subject from './subject.js';

export default class DropdownSubject extends Subject {
  constructor() {
    super();
  }

  expand() {}

  collapse() {}

  dispatch() {
    this.observers.forEach(observer => observer.update());
  }
}