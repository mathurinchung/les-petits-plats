import recipes from "../data/recipes.js";

export default class Api {
  static get() {
    return recipes;
  }
}