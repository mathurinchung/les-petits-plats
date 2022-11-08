import ComponentsTemplate from "../templates/components.js";
// import ComponentsUtils from "../utils/index.js";

class Components {
  displayComponents() {
    const componentsTemplate = new ComponentsTemplate();

    componentsTemplate.DropdownDOM("ingredients", "Ingredients");
    componentsTemplate.DropdownDOM("appliances", "Appareils");
    componentsTemplate.DropdownDOM("ustensils", "Ustensiles");
  }

  handleComponents() {}

  init() {
    this.displayComponents();
    this.handleComponents();
  }
}

const components = new Components();
components.init();