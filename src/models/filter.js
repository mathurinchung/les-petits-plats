import * as utils from '../utils/index.js'

export default class FilterModel {
  constructor(data) {
    this.data = data;
  }

  get ingredients() {
    const array = new Set();

    this.data.map(recipe => {
      recipe.ingredients.map(item => {
        const string = utils.setString(item.ingredient);
        utils.hasItem(array, string);
      });
    });

    return [ ...array ];
  }

  get appliances() {
    const array = new Set();

    this.data.map(recipe => {
      const string = utils.setString(recipe.appliance);
      utils.hasItem(array, string);
    });

    return [ ...array ];
  }

  get ustensils() {
    const array = new Set();

    this.data.map(recipe => {
      recipe.ustensils.map(item => {
        const string = utils.setString(item);
        utils.hasItem(array, string);
      });
    });

    return [ ...array ];
  }
}