import FilterModel from "../models/filter.js";

export default class FillterFactory {
  constructor(data) {
    this.filters = new FilterModel(data);

    return { ingredients: this.filters.ingredients, appliances: this.filters.appliances, ustensils: this.filters.ustensils,  }
  }
}