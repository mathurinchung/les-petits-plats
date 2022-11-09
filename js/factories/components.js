import RecipeModel from "../models/recipe.js";
import ComponentsUtils from "../utils/index.js";

export default class ComponentsFactory {
  constructor(data) {
    this._data = new RecipeModel(data);

    return new ComponentsUtils(this._data);
  }
}