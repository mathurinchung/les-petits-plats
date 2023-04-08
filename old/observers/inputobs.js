export default class InputObserver {
  constructor(inputSubject) {
    this.inputSubject = inputSubject;
  }

  update() {
    const xmarkIconElements = [ ...document.querySelectorAll('.icon-circle-xmark') ];
    xmarkIconElements.forEach(element => element.addEventListener('click', () =>{
      this.inputSubject.clearInput(element);
      this.inputSubject.detach(this);
    }));
  }

  init() {
    document.querySelectorAll('input').forEach(element => {
      element.addEventListener('input' , e => {
        this.inputSubject.add(this);
        this.inputSubject.handleValueInput(e);
      });
    });
  }
}
