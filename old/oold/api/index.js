import recipes from '../data/recipes.js';

export default class Api {
  constructor() {
    this.data = recipes;
  }

  get() { return recipes }
}