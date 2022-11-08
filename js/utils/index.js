import ComponentsSubject from "./subject.js";
import SearchbarUtils from "./searchbar.js";
import KeywordsUtils from "./keywords.js";
import DropdownUtils from "./dropdown.js";

export default class ComponentsUtils {
  constructor(data) {
    this._data = data;
  }

  handler() {
    const componentsSubject = new ComponentsSubject();
    const searchbarUtils = new SearchbarUtils();
    const keywordsUtils = new KeywordsUtils();
    const dropdownUtils = new DropdownUtils(this._data);

    componentsSubject.attach(searchbarUtils);
    componentsSubject.attach(keywordsUtils);
    componentsSubject.attach(dropdownUtils);
    componentsSubject.notify();
  }
}