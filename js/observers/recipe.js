export default class RecipeSubject {
  constructor() {
    this.observers = { set: [], update: [] };
  }

  attach(type, observer) {
    this.observers[type][this.observers[type].length] = observer; // change method
  }

  // detach(observer) {
  //   this.observers = this.observers.filter(obs => obs !== observer);
  // }

  dispatch(type, state) {
    if (this.observers[type].length > 0) {
      if (type === "set") {
        const arr = [];
        for (const obs of this.observers[type]) {
          arr[arr.length] = obs.set(state);
        }
        return arr;
      }
      if (type === "update") {
        const arr = [];
        for (const obs of this.observers[type]) {
          arr[arr.length] = obs.update(state);
        }
        return arr;
      }
    }
  }
}