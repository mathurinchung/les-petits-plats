import Subject from './subject.js';

export default class ObserverSubject extends Subject {
  constructor() {
    super();
  }

  dispatch() {
    this.observers.forEach(observer => observer.init());
  }
}
