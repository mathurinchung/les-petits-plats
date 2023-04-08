import Subject from './subject.js';

export default class InputSubject extends Subject {
  constructor() {
    super();
  }

  handleValueInput(e) {


    this.dispatch();
  }

  clearInput() {
    console.log('clear');

    this.dispatch();
  }

  dispatch() {
    this.observers.forEach(observer => observer.update());
  }
}